<template>
  <div class="wheel-control" :style="wheelControlStyle">
    <div class="swiper" ref="carousel">
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
      </div>
    </div>
    <button @click="updateEventsTarget">change mousewheel eventstarget</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import Swiper from 'swiper'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/mousewheel'
declare module 'vue' {
  interface ComponentCustomProperties {
    $carousel?: Swiper
  }
}
Swiper.use([Mousewheel])

export default defineComponent({
  data() {
    return {
      bodyScroll: true
    }
  },
  computed: {
    wheelControlStyle() {
      return { height: this.bodyScroll ? '100vh' : 'auto' }
    }
  },
  async mounted() {
    await this.$nextTick()
    this.initSwiper()
  },
  methods: {
    initSwiper() {
      console.log('refs', this.$refs)
      if (this.$refs?.carousel) {
        this.$carousel = new Swiper(this.$refs.carousel as HTMLElement, {
          mousewheel: {
            eventsTarget: '.wheel-control',
            releaseOnEdges: true
          }
        })
      }
    },
    updateEventsTarget() {
      console.log('updating')
      if (!this.$carousel) return
      this.bodyScroll = !this.bodyScroll
    }
  }
})
</script>
<style scoped>
.swiper-slide {
  height: 200px;
}
</style>
