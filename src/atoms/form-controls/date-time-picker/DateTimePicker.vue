<script setup lang="ts">
const dateModel = defineModel<string>('date')
const timeModel = defineModel<string>('time')
</script>

<template>
  <div class="datetime-picker">
    <div class="datetime-picker__field datetime-picker__field_type_date">
      <input v-model="dateModel" type="date" class="datetime-picker__input" />
    </div>

    <div class="datetime-picker__field datetime-picker__field_type_time">
      <input v-model="timeModel" type="time" class="datetime-picker__input" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.datetime-picker {
  display: flex;
  gap: 8px;
  font-family: 'Raleway', sans-serif;

  &__field {
    @include globalMixins.form-control-base;
    height: 40px;
    width: max-content;
  }

  &__input {
    background: transparent;
    border: none;
    color: #ffffff;
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 16px;
    height: 100%;
    outline: none;
    width: 100%;
    text-align: center;
    cursor: pointer;
  }

  input[type='date'],
  input[type='time'] {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }

  input::-webkit-calendar-picker-indicator {
    display: none;
  }
}
</style>
