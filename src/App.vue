<script setup lang="ts">
const { charging, chargingTime, dischargingTime, level, isSupported } = useBattery()
import { Container, Sprite, Texture } from 'pixi.js';
import { reactive } from 'vue'
import { useBattery } from '@vueuse/core'
import { PixiViewport } from 'vue3-pixi-components';
function getWidth() {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )
}
function getHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  )
}
const battery = reactive(useBattery())
const text = battery
const texture = Texture.WHITE
</script>

<template>
  <div>
    <span>{{ text  }}</span>
    <PixiViewport :width="getWidth()" :height="getHeight()">
      <Container>
        <Sprite :texture="texture" :width="100" :height="400">
        </Sprite>
      </Container>
    </PixiViewport>
  </div>
</template>