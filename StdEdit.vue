<template> 
  <div class="edit-student-container">
    <h2>- STUDENT LIST -</h2>
    <form @submit.prevent="updateStudent">
      <div class="form-group" v-for="(label, key) in labels" :key="key">
        <label :for="key">{{ label }}:</label>
        <input type="text" :id="key" v-model="student[key]" />
      </div>
      <button type="submit" class="save-btn">Save</button>
      <button type="button" class="back-btn" @click="$router.push('/')">Back</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        firstName: "",
        lastName: "",
        studentId: "",
        faculty: "",
        major: "",
        school: "",
      },
      labels: {
        firstName: "ชื่อ",
        lastName: "นามสกุล",
        studentId: "รหัสนิสิต",
        faculty: "คณะที่กำลังศึกษา",
        major: "สาขาที่กำลังศึกษา",
        school: "โรงเรียนเดิม",
      },
    };
  },
  created() {
    const studentData = JSON.parse(localStorage.getItem("studentInfo")) || {};
    this.student = { ...this.student, ...studentData };
  },
  methods: {
    updateStudent() {
      
      Object.keys(this.student).forEach(key => {
        if (!this.student[key]) this.student[key] = "ไม่ระบุ";
      });

      localStorage.setItem("studentInfo", JSON.stringify(this.student));
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&family=Rajdhani:wght@400;700&display=swap');

.edit-student-container {
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  max-width: 700px;
  margin: 80px auto;
  text-align: center;
  color: white;
  font-family: 'Rajdhani', sans-serif;
}

h2 {
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  color: #ffcc00;
  text-shadow: 0 0 20px #ffcc00;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 22px;
  text-align: left;
}

label {
  display: block;
  font-size: 20px;
  margin-bottom: 8px;
  color: #ffcc00;
}

input {
  width: 100%;
  padding: 10px;
  border: 2px solid #fff;
  border-radius: 8px;
  background-color: #222;
  color: white;
  box-shadow: inset 0 0 5px #ffcc00;
  transition: 0.3s;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
}

input:focus {
  border-color: #ff00ff;
  box-shadow: 0 0 10px #ff00ff;
  outline: none;
}

.save-btn {
  background: linear-gradient(45deg, #ffcc00, #d4af37);
  color: black;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  box-shadow: 0 0 12px #ffcc00;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}

.save-btn:hover {
  background: linear-gradient(45deg, #ff00ff, #800080);
  color: white;
  box-shadow: 0 0 18px #ff00ff;
}

.back-btn {
  background: linear-gradient(45deg, #ff6666, #cc0000);
  color: white;
  font-weight: bold;
  padding: 12px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
  box-shadow: 0 0 12px #ff6666;
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  margin-top: 10px;
}

.back-btn:hover {
  background: linear-gradient(45deg, #cc0000, #660000);
  box-shadow: 0 0 18px #ff3333;
}
</style>
