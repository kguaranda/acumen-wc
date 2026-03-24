<script setup lang="ts">
const colorTokens = [
  { name: "$color-token-black", value: "#000000" },
  { name: "$color-token-white", value: "#ffffff" },
  { name: "$color-token-blue-primary", value: "#002f71" },
  { name: "$color-token-cyan", value: "#00a0cc" },
  { name: "$color-token-green-dark", value: "#064f23" },
  { name: "$color-token-green", value: "#087323" },
  { name: "$color-token-green-alt", value: "#097324" },
  { name: "$color-token-blue-accent", value: "#2a6eeb" },
  { name: "$color-token-indigo", value: "#2c2cb8" },
  { name: "$color-token-purple-dark", value: "#4f005e" },
  { name: "$color-token-mint", value: "#a4e2c7" },
  { name: "$color-token-red-dark", value: "#ce242b" },
  { name: "$color-token-grey", value: "#d9d9d9" },
  { name: "$color-token-orange", value: "#e45313" },
  { name: "$color-token-magenta", value: "#e52d87" },
  { name: "$color-token-grey-light", value: "#e8f0f7" },
  { name: "$color-token-yellow", value: "#fdca00" },
  { name: "$color-token-red", value: "#ff0000" },
  { name: "$color-token-red-bright", value: "#ff3500" },
];

const fontSizeTokens = [
  { name: "$font-size-token-12", value: "12px" },
  { name: "$font-size-token-14", value: "14px" },
  { name: "$font-size-token-16", value: "16px" },
  { name: "$font-size-token-20", value: "20px" },
  { name: "$font-size-token-24", value: "24px" },
  { name: "$font-size-token-32", value: "32px" },
  { name: "$font-size-token-40", value: "40px" },
  { name: "$font-size-token-64", value: "64px" },
  { name: "$font-size-token-72", value: "72px" },
];

const darkSwatchValues = new Set(["#000000", "#002f71", "#064f23", "#087323", "#097324", "#2c2cb8", "#4f005e", "#ce242b", "#ff0000", "#ff3500"]);
</script>

<template>
  <section class="token-preview">
    <h2>Design Tokens Preview</h2>

    <h3>Colors</h3>
    <div class="token-preview__color-grid">
      <article v-for="token in colorTokens" :key="token.name" class="token-preview__card">
        <div
          class="token-preview__swatch"
          :style="{ backgroundColor: token.value }"
        />
        <p class="token-preview__name">{{ token.name }}</p>
        <p
          class="token-preview__value"
          :class="{ 'token-preview__value--light': darkSwatchValues.has(token.value) }"
        >
          {{ token.value }}
        </p>
      </article>
    </div>

    <h3>Font Sizes</h3>
    <div class="token-preview__type-list">
      <div v-for="token in fontSizeTokens" :key="token.name" class="token-preview__type-row">
        <p class="token-preview__name">{{ token.name }}</p>
        <p class="token-preview__sample" :style="{ fontSize: token.value }">
          The quick brown fox jumps over the lazy dog ({{ token.value }})
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.token-preview {
  padding: $md;
  background: $color-white;
  color: $color-black;

  h2,
  h3 {
    margin-bottom: 12px;
  }

  h3 {
    margin-top: 24px;
  }

  &__color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }

  &__card {
    border: 1px solid #d9d9d9;
    padding: 10px;
    border-radius: 8px;
  }

  &__swatch {
    width: 100%;
    height: 64px;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-bottom: 8px;
  }

  &__name {
    font-size: 12px;
    margin: 0;
  }

  &__value {
    font-family: monospace;
    font-size: 12px;
    margin: 4px 0 0;

    &--light {
      color: #ffffff;
      background: rgba(0, 0, 0, 0.4);
      width: fit-content;
      padding: 2px 6px;
      border-radius: 4px;
    }
  }

  &__type-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__type-row {
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 10px;
  }

  &__sample {
    margin: 6px 0 0;
    line-height: 1.2;
  }
}
</style>
