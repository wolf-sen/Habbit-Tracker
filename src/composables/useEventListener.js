// composable function for handling mounting an unmounting of a eventListener Instance.

import { onMounted, onUnmounted } from "vue";

export function useEventListener(target, event, callback) {
  onMounted(() => target.addEventListener(event, callback));
  onUnmounted(() => target.removeEventListener(event, callback));
}
