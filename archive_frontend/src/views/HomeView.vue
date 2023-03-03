<template>

  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-center" data-aos="fade-up">
        <div class="col-xl-10 col-lg-10 col-12">

          <h1>Welcome to <span style="color: chartreuse;">NUASA</span> Academic Resource Archives<span>.</span></h1>
          <h3>This resource archive was developed to be an online library and store for all NUASA Academic resources and materials.
              It also serves as a permanent and cost free academic resource backup to the main NUASA website.
          </h3>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-3">
            <button type="button" class="btn btn-lg px-4 gap-3 text-dark" style="background-color: chartreuse;">Years</button>
            <button type="button" class="btn btn-outline-warning btn-lg px-4">Developer</button>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <table class="table">
            <thead class="thead-success">
                <tr>
                    <th scope="col">Level</th>
                    <th scope="col">Link</th>
                </tr>
            </thead>
            
            <tbody>
              <tr v-for="year in year_data">
                <td>{{ year.year }}</td>
                <td>
                  <router-link :to="{name:'courses', params:{year_id:year.id}}">
                      <a class="btn text-dark" href="" style="background-color: chartreuse;">View</a>                 
                  </router-link>
                </td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
export default {
    name: 'HomeYearView',
    data(){
        return {
          year_data:""
        }
    },
    mounted(){
      fetch('https://inidev.alwaysdata.net/api/year/')
      .then(response => {
          return response.json()
      })
      .then(data => {
          console.log(data)
          this.year_data = data.years
      })
      .catch(err => {
          alert("Can't Retrieve year data currently")
          console.log(err)
      })
    }
}
</script>