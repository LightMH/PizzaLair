$(document).ready(function () {
    $('#searchBtn').on('click', function (e) {
        e.preventDefault();
        let searchText = $('#search_box').val();
        $.ajax({
            url: '/menu?search_filter=' + searchText,
            type: 'GET',
            success: function (resp) {
                let newHtml = resp.data.map(d => {
                    return `<div class="well pizza">
                                 <a href="/menu/${d.id}">
                                 <img class="pizzaImg" src="${d.image}" alt="pizzaImg">
                                 <h4>${d.name}</h4>
                                 <p>${d.description}</p>
                                </a>
                            </div>`
                });
                $('.pizzas').html(newHtml.join(''));
                $('#search_box'.val(''));
            },
            error: function (xhr, status, error) {
                console.log(error)
            }

        })
    })
})
