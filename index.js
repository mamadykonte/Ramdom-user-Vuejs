const app = Vue.createApp({
    data() {
      return {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@gmail.com',
        tel:'+337575845',
        age: 21,
        city: 'Paris',
        gender: 'male',
        picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      }
    },
    methods:{
       async getUser(){
           const res = await fetch('https://randomuser.me/api/')
           const {results} = await res.json()
           console.log(results)
        
        this.firstName = results[0].name.first
        this.lastName = results[0].name.last
        this.email = results[0].email
        this.tel = results[0].phone
        this.age = results[0].registered.age,
        this.city = results[0].location.city
        this.gender = results[0].gender
        this.picture = results[0].picture.large
          
        

    }}

})
app.mount('#app')