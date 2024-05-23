const products = [
    {
        id: '1',
        name: 'Tiranosaurio',
        price: 40000000,
        category: 'carnivoros', 
        img: 'https://www.lavanguardia.com/andro4all/hero/2023/12/dinosaurio-culpa-vejez.png?width=1200',
        stock: 4,
        description: 'Come gente mientras ésta está en el baño.'
    },
    {
        id: '2',
        name: 'Velociraptor',
        price: 7000000,
        category: 'carnivoros',
        img: 'https://images.bigbadtoystore.com/images/p/full/2024/03/c11daa48-dd74-4d08-8f18-8c3cc37c9efc.jpg',
        stock: 10,
        description: 'Saben abrir puertas.'
    },
    {
        id: '3',
        name: 'Triceratops',
        price: 10000000,
        category: 'herbivoros',
        img: 'https://img.genial.ly/650c41173f513300120fe634/768c07cb-01ed-4b27-933c-cb218b83aa43.jpeg',
        stock: 2,
        description: 'Su embestida es peligrosa.'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductsByCategory = (productCategory) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(products.filter(prod => prod.category === productCategory))
        },500)
    })
}
