<template>
<br>
<br>
<br>
<br>

<main>
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-12" style="overflow-x: auto;">
                <table class="table">
                    <thead class="thead-success">
                        <tr>
                            <th scope="col">Course name</th>
                            <th scope="col">Course code</th>
                            <th scope="col">link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="d in courses_data">
                            <td>{{ d.course_name }}</td>
                            <td>{{  d.course_code }}</td>
                            <td>
                                <router-link :to="{name:'resources', params:{course_id:d.id}}">
                                    <a class="btn text-dark" style="background-color: chartreuse;">View</a>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</main>

<br>
<br>
<br>
<br>
<br>
</template>
  
<script>
export default {
    name: 'CoursesView',
    data(){
        return {
            courses_data:""
        }
    },
    mounted(){
        fetch(`https://inidev.alwaysdata.net/api/course/${ this.$route.params.year_id}/`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            this.courses_data = data.courses
        })
        .catch(err => {
            alert("Can't Retrieve courses currently")
            console.log(err)
        })
    }
}
</script>