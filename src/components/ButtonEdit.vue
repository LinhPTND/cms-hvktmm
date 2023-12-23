<template>
  <a-button type="green" class="button-editing">
    <edit-outlined />
    {{ t("common.edit") }}
  </a-button>
</template>

<script lang="ts" setup>
import { EditOutlined } from "@ant-design/icons-vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<style lang="css" scoped>
.button-editing{
  background-color: green;
}

.button-editing:hover{
  background-color: rgb(177, 211, 177) !important;
}
</style>
