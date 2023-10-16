const images = document.querySelectorAll(".image-container img");
const observar = new IntersectionObserver((entries, observar) =>{
    entries.forEach( entry =>{
        if(!entry.isIntersecting)return

        const image = entry.target

        image.src= image.src.replace("&w=10&", "&w=1000&");

        observar.unobserve(image);
    })
}, {})

images.forEach((image) =>{
    observar.observe(image)
})