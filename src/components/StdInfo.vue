<template>  
  <div class="student-info">
    <div class="profile-container">
      <img src="@/assets/profile.jpg" alt="Student Profile" class="profile-image" v-if="student.firstName">
    </div>
    <h2>- PROFILE -</h2>

    <div class="info-container">
      <div class="info-item">
        <i class="fas fa-user"></i> <strong> ชื่อ-นามสกุล: </strong>
        <span>{{ student.firstName }} {{ student.lastName }}</span>
      </div>
      <div class="info-item">
        <i class="fas fa-id-card"></i> <strong> รหัสนิสิต: </strong>
        <span>{{ student.studentId }}</span>
      </div>
      <div class="info-item">
        <i class="fas fa-graduation-cap"></i> <strong> คณะที่กำลังศึกษา: </strong>
        <span>{{ student.faculty }}</span>
      </div>
      <div class="info-item">
        <i class="fas fa-book"></i> <strong> สาขาที่กำลังศึกษา: </strong>
        <span>{{ student.major }}</span>
      </div>
      <div class="info-item">
        <i class="fas fa-school"></i> <strong> โรงเรียนเดิม: </strong>
        <span>{{ student.school }}</span>
      </div>
    </div>

    <router-link to="/edit" class="edit-button">Edite</router-link>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&display=swap');

.student-info {
  text-align: center;
  color: #fff;
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  padding: 70px 50px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  max-width: 600px;
  margin: 80px auto;
  border: 3px solid rgba(0, 255, 255, 0.6);
  font-family: 'Poppins', sans-serif;
}

.profile-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.profile-image {
  width: 180px;
  height: 220px;
  border-radius: 12px;
  border: 6px solid rgba(0, 255, 255, 0.8);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.7);
  transition: transform 0.3s ease-in-out;
}

.profile-image:hover {
  transform: scale(1.1);
}

h2 {
  font-size: 28px;
  color: #ffcc00;
  text-shadow: 0 0 12px #ffcc00, 0 0 22px #ffcc00;
  letter-spacing: 2px;
}

.info-container {
  margin-top: 30px;
  font-size: 20px;
  line-height: 2.2;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 12px;
  backdrop-filter: blur(7px);
  display: flex;
  flex-direction: column;
  align-items: start;
}

.info-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
}

.info-item strong {
  flex: 1;
  text-align: left;
}

.info-item span {
  flex: 2;
  text-align: right;
}

.info-item i {
  margin-right: 12px;
  color: #ffcc00;
}

.edit-button {
  display: inline-block;
  margin-top: 30px;
  padding: 14px 30px;
  background: linear-gradient(45deg, #ffcc00, #ff9900);
  color: #111;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  transition: background 0.3s, transform 0.2s;
  box-shadow: 0 5px 12px rgba(255, 204, 0, 0.5);
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
}

.edit-button:hover {
  background: linear-gradient(45deg, #ffdd44, #ff8800);
  transform: scale(1.1);
}
</style>

<script>
export default {
  data() {
    return {
      student: {
        firstName: '',
        lastName: '',
        studentId: '',
        faculty: '',
        major: '',
        school: '',
      },
    };
  },
  created() {
    const studentData = JSON.parse(localStorage.getItem('studentInfo')) || {};
    this.student = { ...this.student, ...studentData };
  },
};
</script>
