<template>
  <button class="v3-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="v3-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from 'Vue'

export default {
  props: {
    theme: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    level: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size, level } = props
    const classes = computed(() => {
      return {
        [`v3-theme-${theme}`]: theme,
        [`v3-size-${size}`]: size,
        [`v3-level-${level}`]: level,
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$mainColor: #07a67e;
$dangerColor: #cb0100;
$grey: grey;
$radius: 4px;

.v3-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  &+& {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $mainColor;
    border-color: $mainColor;
  }

  &:focus {
    outline: none
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.v3-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.v3-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.v3-theme-button {
    &.v3-level-main {
      background: $mainColor;
      color: white;
      border-color: $mainColor;

      &:hover,
      &:focus {
        background: darken($mainColor, 10%);
        border-color: darken($mainColor, 10%);
      }
    }

    &.v3-level-danger {
      background: $dangerColor;
      border-color: $dangerColor;
      color: white;

      &:hover,
      &:focus {
        background: darken($dangerColor, 10%);
        border-color: darken($dangerColor, 10%);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: $grey;

      &:hover {
        border-color: $grey;
      }
    }
  }

  &.v3-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $mainColor;

    &:hover,
    &:focus {
      color: lighten($mainColor, 10%);
    }

    &.v3-level-danger {
      color: $dangerColor;

      &:hover,
      &:focus {
        color: darken($dangerColor, 10%);
      }
    }

    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }

  &.v3-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      color: darken(white, 5%);
    }

    &.v3-level-main {
      color: $mainColor;

      &:hover,
      &:focus {
        color: darken($mainColor, 10%);
      }
    }

    &.v3-level-danger {
      color: $dangerColor;

      &:hover,
      &:focus {
        color: darken($dangerColor, 10%);
      }
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: $grey;
  }

  >.v3-loadingIndicator {
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $mainColor $mainColor $mainColor transparent;
    border-style: solid;
    border-width: 2px;
    animation: v3-spin 1s infinite linear;
  }
}

@keyframes v3-spin {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>