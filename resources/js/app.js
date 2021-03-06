
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./utils/jquery.mask.min.js');
require('./utils/jquery-ui.min.js');
require('./utils/make_masks.js');
require('./utils/makeForm.js');
require('./utils/verifica_cpf_cnpj.js');
require('./utils/viacep.js');

// window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     el: '#app'
// });



$("#menu-toggle").click(function(e) {
e.preventDefault();
$("#wrapper").toggleClass("toggled");
});
$('#sidebarCollapse').on('click', function () {
    $('#sidebar-wrapper').toggleClass('active');
});
$("#page-content-wrapper").on('click', function () {
$('#sidebar-wrapper').removeClass('active');
});

$(document).ready(function(){
    $('.cleanDestaquesOptions').click(function(){
        $("input[name='scales']").prop('checked',false);
    });
    $('.cleanSuperDestaquesOptions').click(function(){
        $("input[name='scalesSuper']").prop('checked',false);
    });
    function init(){
        let combo = JSON.parse(localStorage.getItem('combo'));
        if(combo){
            $("input[name='pacote_selected'][value='"+combo.pacote+"']").prop('checked',true);
            $("input[name='scales'][value='"+combo.destaques+"']").prop('checked',true);
            $("input[name='scalesSuper'][value='"+combo.super_destaques+"']").prop('checked',true);
        }
    }
    $("#pagarComPagSeguro").click(()=>{
        let combo = {
            pacote: $("input[name='pacote_selected']:checked").val(),
            destaques: $("input[name='scales']:checked").val(),
            super_destaques: $("input[name='scalesSuper']:checked").val()
        }
        localStorage.setItem('combo', JSON.stringify(combo));
    });

    init();
});