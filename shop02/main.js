window.onload = function digtal_fn()
{
    let toggle = document.querySelector("#nav .toggle-btn");
    let collapse = document.querySelector("#nav .collapse");

    toggle.addEventListener('click', function(event)
    {
        /* console.log(toggle) */
        collapse.classList.toggle('active')
    });
}