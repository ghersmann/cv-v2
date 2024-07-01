import { defineStore } from 'pinia'
import ArrowOne from '@/assets/img/ArrowOne.svg'
import ArrowOneWhite from '@/assets/img/ArrowOne-white.svg'
import ArrowHorizontal from '@/assets/img/ArrowHorizontal.svg'
import ArrowHorizontalWhite from '@/assets/img/ArrowHorizontal-white.svg'

export const useArrowStore = defineStore('arrowStore', {
  state: () => ({
    currentArrow: ArrowOne
  }),
  actions: {
    updateArrow() {
      const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
      const isNarrowScreen = window.matchMedia('(max-width: 600px)').matches

      if (isNarrowScreen) {
        this.currentArrow = isDarkMode ? ArrowOneWhite : ArrowOne
      } else {
        this.currentArrow = isDarkMode ? ArrowHorizontalWhite : ArrowHorizontal
      }
    }
  }
})
