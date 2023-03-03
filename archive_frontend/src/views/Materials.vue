<template>
<br>
<br>
<br>

<main>
    <div class="album py-5 bg-light">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div class="col" v-for="d in resources_data">
                    <div class="card shadow-sm">
                        <div class="card-body">
                            <p class="card-title"><b>title:</b> {{ d.material_title }}</p>
                            <p class="card-text"><b>description:</b> {{ d.material_description }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a :href="d.material_link" type="button" class="btn btn-md text-dark" style="background-color: chartreuse;">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</main>

<br>
<br>
</template>
      
<script>
export default {
    name: 'MaterialsView',
    data(){
        return {
            resources_data:""
        }
    },
    mounted(){
        fetch(`https://inidev.alwaysdata.net/api/materials/${ this.$route.params.course_id}/`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            // narrow the data down to the groups
            console.log(data)
            this.resources_data = data.materials
        })
        .catch(err => {
            alert("Can't Retrieve materials for this course currently")
            console.log(err)
        })
    }
}
</script>