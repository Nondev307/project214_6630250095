<template> 
  <div class="course-container">
    <h2>- Grade Report -</h2>
    
    <table>
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">{{ header }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(course, index) in courses" :key="index">
          <td v-for="key in courseKeys" :key="key">{{ course[key] }}</td>
          <td>
            <button class="edit-btn" @click="editCourse(index)">Edit</button>
            <button class="delete-btn" @click="deleteCourse(index)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="summary">
      <h3>ตรวจสอบผลการเรียน</h3>
      <p>จำนวนรายวิชา: {{ totalCourses }}</p>
      <p>หน่วยกิตสะสม: {{ totalCredits }}</p>
      <p>เกรดเฉลี่ยสะสม: {{ averageGrade }}</p>
    </div>

    <button class="add-btn" @click="addCourse">Add</button>

    <div v-if="isEditing" class="form-container">
      <h3>{{ editingIndex === null ? 'เพิ่มข้อมูลรายวิชา' : 'แก้ไขข้อมูลรายวิชา' }}</h3>
      <form @submit.prevent="saveCourseEdit">
        <div class="form-group" v-for="(label, key) in courseLabels" :key="key">
          <label :for="key">{{ label }}:</label>
          <input v-model="editedCourse[key]" :type="key === 'credits' ? 'number' : 'text'" required>
        </div>
        <div class="button-group">
          <button type="submit" class="save-btn">Save</button>
          <button type="button" class="cancel-btn" @click="cancelEdit">Cancel</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [],
      isEditing: false,
      editedCourse: this.getEmptyCourse(),
      editingIndex: null,
      headers: ['Course Code', 'Course Name', 'Credits', 'Grade'],
      courseKeys: ['courseCode', 'courseName', 'credits', 'grade'],
      courseLabels: {
        courseCode: 'รหัสรายวิชา',
        courseName: 'ชื่อรายวิชา',
        credits: 'หน่วยกิต',
        grade: 'เกรดเฉลี่ย'
      }
    };
  },
  computed: {
    totalCourses() {
      return this.courses.length;
    },
    totalCredits() {
      return this.courses.reduce((sum, course) => sum + (Number(course.credits) || 0), 0);
    },
    averageGrade() {
      const gradePoints = { A: 4, 'B+': 3.5, B: 3, 'C+': 2.5, C: 2, 'D+': 1.5, D: 1, F: 0 };
      let totalPoints = this.courses.reduce((sum, course) => {
        let gradeValue = gradePoints[course.grade] ?? 0; 
        return sum + gradeValue * (Number(course.credits) || 0);
      }, 0);
      return this.totalCredits ? (totalPoints / this.totalCredits).toFixed(2) : "0.00";
    }
  },
  methods: {
    getEmptyCourse() {
      return { courseCode: '', courseName: '', credits: '', grade: '' };
    },
    addCourse() {
      this.isEditing = true;
      this.editedCourse = this.getEmptyCourse();
      this.editingIndex = null;
    },
    saveCourseEdit() {
      if (this.editingIndex === null) {
        this.courses.push({ ...this.editedCourse });
      } else {
        this.courses[this.editingIndex] = { ...this.editedCourse };
      }
      this.saveToLocalStorage();
      this.cancelEdit();
    },
    editCourse(index) {
      this.isEditing = true;
      this.editedCourse = { ...this.courses[index] };
      this.editingIndex = index;
    },
    deleteCourse(index) {
      this.courses.splice(index, 1);
      this.saveToLocalStorage();
    },
    cancelEdit() {
      this.isEditing = false;
      this.editedCourse = this.getEmptyCourse();
    },
    saveToLocalStorage() {
      localStorage.setItem('courses', JSON.stringify(this.courses));
    },
    loadCourses() {
      try {
        this.courses = JSON.parse(localStorage.getItem('courses')) || [];
      } catch (error) {
        console.error("Error loading courses from localStorage", error);
        this.courses = [];
      }
    }
  },
  created() {
    this.loadCourses();
  }
};
</script>

<style scoped>
.course-container {
  background: linear-gradient(135deg, #1a1a2e, #16213e, #0f3460);
  padding: 50px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
  max-width: 900px;
  margin: 50px auto;
  text-align: center;
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
}

th, td {
  border: 2px solid white;
  padding: 15px;
  text-align: center;
  font-size: 16px;
}

th {
  background: rgba(255, 255, 255, 0.2);
}

.form-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
}

.form-group label {
  flex: 2;
  text-align: left;
  padding-right: 10px;
}

.form-group input {
  flex: 2;
  padding: 8px;
  border-radius: 10px;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.edit-btn, .delete-btn, .add-btn, .save-btn, .cancel-btn {
  transition: 0.5s;
  border-radius: 10px;
  font-family: 'Poppins', sans-serif;
}

.edit-btn:hover, .add-btn:hover, .save-btn:hover {
  background: #ffcc00;
  color: black;
}

.delete-btn:hover, .cancel-btn:hover {
  background: #ff0066;
  color: white;
}
</style>
