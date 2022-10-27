function Fields (id, name, image, state, price, address, latitude, longitude, sizes, surfaces) {
    this.id = id
    this.name = name
    this.image = image
    this.state = state
    this.price = price
    this.address = address
    this.latitude = latitude
    this.longitude = longitude
    this.latitude = latitude
    this.sizes = sizes
    this.surfaces = surfaces
}

const river = new Fields(1,"River", "https://i.pinimg.com/originals/1f/54/50/1f5450f4346e2e58eff217eecbfd73f1.png", "APROVED", 10, "3571 Gore Street", 10, 10, "5", "sintetico")
const boca = new Fields(2,"Boca", "https://i.pinimg.com/550x/c9/10/51/c91051177eb678932c82bf31ed6bbcdd.jpg", "APROVED", 20, "1726 Parkview Drive", 20, 20, "7", "cesped")
const independiente = new Fields(3,"Independiente", "https://previews.123rf.com/images/moovstock/moovstock1707/moovstock170701244/82137671-bandera-con-el-logo-del-club-de-f%C3%BAtbol-club-atletico-independiente-representaci%C3%B3n-3d-editorial.jpg", "APROVED", 30, "3833 Melm Street", 30, 30, "9", "parquet")
const huracan = new Fields(4,"Huracan", "https://http2.mlstatic.com/D_NQ_NP_781934-MLA47586950773_092021-V.jpg", "APROVED", 40, "3585 Mount Tabor", 40, 40, "11", "cemento")
const sanLorenzo = new Fields(5,"SanLorenzo", "https://i.pinimg.com/originals/2b/dd/d5/2bddd5f0ffb5cfae0d7191dc1a9b30a7.jpg", "APROVED", 50, "4727 Ralph Drive", 50, 50, "5", "sintetico")
const instituto = new Fields(6,"Instituto", "https://www.institutoacc.com.ar/wp-content/uploads/2018/03/images.png", "APROVED", 60, "682 Crestview Manor", 60, 60, "7", "cesped")
const talleres = new Fields(7,"Talleres", "https://nuestracordoba.com.ar/wp-content/uploads/2017/08/talleres-bandera_3.jpg", "APROVED", 70, "1239 Hillcrest Circle", 70, 70, "9", "parquet")
const belgrano = new Fields(8,"Belgrano", "https://w0.peakpx.com/wallpaper/190/709/HD-wallpaper-belgrano-de-cordoba-futbol-futbol-argentino-superliga-thumbnail.jpg", "APROVED", 80, "2717 John Daniel Drive", 80, 80, "11", "cemento")
const lanus = new Fields(9,"Lanus", "https://i.pinimg.com/originals/af/61/4c/af614cf1d3f9ce6f9541dd15de66014a.png", "APROVED", 90, "2684 Marshville Road", 90, 90, "5", "sintetico")
const velez = new Fields(10,"Velez", "https://i.pinimg.com/236x/11/05/fd/1105fdfd8b54460a9fb8b0aae9eec0f8.jpg", "APROVED", 100, "1707 Worley Avenue", 100, 100, "7", "cesped")

const teams = [river, boca, independiente, huracan, sanLorenzo, instituto, talleres, belgrano, lanus, velez]

export default teams