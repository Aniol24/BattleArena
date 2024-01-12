
<template>
    <div v-if="visible" class="toast" :class="type">{{ message }}</div>
</template>
  
<script>
  export default {
    data() {
      return {
        visible: false,
        message: '',
        type: ''
      };
    },
    methods: {
      showToast(message, type) {
        this.message = message;
        this.type = type;
        this.visible = true;
  
        setTimeout(() => {
          this.visible = false;
        }, 2000); // hide after 3 seconds
      }
    }
  };
</script>
  
<style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }
  .error {
    background-color: red;
  }

  .success {
    background-color: green;
  }
</style>
  