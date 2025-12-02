<template>
  <header style="padding-right: 0;" class="relative z-50 w-full h-24 flex items-center justify-between px-8 md:px-16 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-[#dcdce6] via-[#a8aabc] to-[#7c7d96] z-0"></div>

    <div class="relative z-20 flex items-center gap-3">
      <div class="w-10 h-10 flex items-center justify-center">
 <img src="../assets/imgs/logo.png " class="w-8 h-8 " alt="">
      </div>
      <span class="text-3xl font-extrabold text-[#2a2a30] tracking-wider font-sans">ASTAR</span>
    </div>

    <nav class="hidden md:flex items-center h-full relative z-10">
      <div
        class="absolute top-0 bottom-0 bg-[#353540] -skew-x-[25deg] z-0 origin-bottom transition-all duration-500 ease-out"
        :style="{ left: activePosition + 'px', width: activeWidth + 'px' }"
      ></div>

      <ul class="flex items-center gap-16 relative z-10 h-full pl-8">
        <li
          v-for="(item, index) in menuItems"
          :key="index"
          class="h-full flex items-center"
          ref="menuRefs"
        >
          <a
            href="#"
            @click.prevent="setActive(index)"
            :class="[
              'text-lg tracking-wide transition-all duration-300',
              activeIndex === index
                ? 'text-white font-bold'
                : 'text-[#2a2a30] font-medium hover:text-white'
            ]"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>

<div class="relative z-20 flex items-center gap-4 bg-[#F2F0FE] header-skew-background" style="height: 100%; padding: 0 100px 0px 100px; width: fit-content;">

  <span class="text-[#2a2a30] font-bold text-base uppercase tracking-wide">Contact Us</span>
  <div class="w-10 h-10 rounded-full border-2 border-[#2a2a30] flex items-center justify-center text-[#2a2a30] hover:bg-[#2a2a30] hover:text-white transition-colors cursor-pointer">
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
  <circle cx="12" cy="7" r="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8 7a4 4 0 0 1 8 0" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 7v2a2 2 0 0 1-2 2h-1" />
</svg>
  </div>
</div>
  </header>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const menuItems = ['Home', 'About Us', 'Event', 'Products']
const activeIndex = ref(0)
const activePosition = ref(0)
const activeWidth = ref(0)
const menuRefs = ref([])

const setActive = (index) => {
  activeIndex.value = index
  updatePosition()
}

const updatePosition = () => {
  nextTick(() => {
    if (menuRefs.value && menuRefs.value[activeIndex.value]) {
      const element = menuRefs.value[activeIndex.value]
      const navElement = element.closest('nav')

      if (navElement) {
        const navRect = navElement.getBoundingClientRect()
        const itemRect = element.getBoundingClientRect()

        // 1. تحديد العرض: (كما طلبته 1.8)
        activeWidth.value = itemRect.width * 1.8

        // 2. حساب مركز عنصر القائمة:
        // 32px تأتي من الـ padding-left (pl-8) في عنصر <ul>
        const itemCenter = itemRect.left - navRect.left + (itemRect.width / 2) - 32

        // 3. تحديد الإزاحة التعويضية (Compensation Offset):
        // بما أن العنصر مائل بمقدار 25 درجة وله عرض كبير، يجب إزاحته قليلاً لليمين لجعله يبدو متمركزاً بصرياً.
        // تم تحديد قيمة 25 كقيمة تقديرية للتعويض عن الميلان (Skew).
        const compensationOffset = 10;

        // 4. الموضع النهائي لـ `left`:
        activePosition.value = (itemCenter - (activeWidth.value / 2)) + compensationOffset;
      }
    }
  })
}

onMounted(() => {
  updatePosition()
  window.addEventListener('resize', updatePosition)
})
</script>
<style scoped>
/* 1. إعداد العنصر الأب وحذف الخلفية منه */
.header-skew-background {
    position: relative;
    /* مهم جداً: إلغاء الخلفية الأصلية ليعمل العنصر الزائف كخلفية */
    background-color: transparent !important;
    /* مهم: لإخفاء أي زوائد عنيفة للميل خارج حدود العنصر */
    overflow: hidden;
}

/* 2. إنشاء الخلفية المائلة (الميل من اليسار) */
.header-skew-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 11px;
    bottom: 0;

    /* قيم ضرورية لتغطية الميل: توسيع العرض وسحب لليسار */
    width: 120%;
    right: -20%;

    background-color: #F2F0FE;
    z-index: 1; /* وضعها خلف المحتوى */

    /* === التحويل للميل من اليسار === */

    /* القيمة السالبة تدفع الجزء العلوي لليسار، مما يخلق ميلانًا واضحًا على اليسار */
    transform: skewX(-10deg);

    /* تثبيت نقطة التحويل على اليمين (100%) لتركيز التشوه على الطرف الأبعد (اليسار) */
    transform-origin: 100% 50%;
}

/* 3. رفع مستوى z-index للمحتوى ليظهر فوق الخلفية */
/* هذا الجزء يجب أن يستهدف المحتوى الفعلي داخل العنصر الأب */
.header-skew-background > div {
    /* تم نقل الـ position و z-index إلى الـ HTML المُعدل */
    /* إذا كنت تفضل إبقاءها في الـ CSS فاستخدم: */
    /* position: relative;
    z-index: 3; */
}

/* ملاحظة: بما أنك تستخدم flex مباشرة على العنصر الأب، يمكنك استخدام هذا لتطبيق z-index على المحتوى */
.header-skew-background > * {
    position: relative;
    z-index: 3;
}
</style>
