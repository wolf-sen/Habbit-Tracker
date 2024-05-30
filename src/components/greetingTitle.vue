<script>
import { defaultUserName } from "@/configs/defaults.config";
import { ref, watch } from "vue";
import useAPI from "@/composables/useAPI";

export default {
  props: {
    userID: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    let userName = ref("Human");

    const fetchUserName = (id) => {
      useAPI
        .get(`/user?id=${id}`)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            userName.value = response.data[0].name;
          } else {
            userName.value = defaultUserName;
          }
        })
        .catch(() => {
          userName.value = defaultUserName;
        });
    };

    // Fetch the user name when the component is mounted
    fetchUserName(props.userID);

    // Watch for changes in the userID prop and fetch the user name accordingly
    watch(() => props.userID, (newUserID) => {
      fetchUserName(newUserID);
    });

    return { userName };
  },
};
</script>

<template>
  <div class="content-center">
    <h1 class="text-2xl font-medium">
      Hello, <span class="font-bold">{{ userName }}</span
      >!
    </h1>
  </div>
</template>

<style scoped></style>
