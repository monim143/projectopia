/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

$(window).on('load', function () {
    // code here...
});




/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // drag and drop
    // for creating custom field 
    $(function () {
        if ($('#dragable-area').length && $('#droppable-area').length) {
            $("#dragable-area .draggable-item").draggable({
                helper: 'clone',
                cursor: "move",
                revert: "invalid",
                start: function (ev, ui) {
                    let scrollTop = $(window).scrollTop();
                    if (scrollTop > 0) {
                        ui.helper.css('margin-top', scrollTop);
                    }
                },
                // stop: function (ev, ui) {
                //     ui.item.css('margin-top', 0);
                // }
            });

            $("#droppable-area").droppable({
                accept: '#dragable-area .draggable-item',
                drop: function (event, ui) {
                    // dragID
                    let dragID = ui.draggable[0].id
                    // drop field by dragID
                    switch (dragID) {
                        case 'checkbox-group':
                            $(this).append($('#form-check').clone());
                            break;
                        case 'date-field':
                            $(this).append($('#form-date').clone());
                            break;
                        case 'number':
                            $(this).append($('#form-number').clone());
                            break;
                        case 'radio-group':
                            $(this).append($('#form-radio').clone());
                            break;
                        case 'select-group':
                            $(this).append($('#form-select').clone());
                            break;
                        case 'text-field':
                            $(this).append($('#form-text').clone());
                            break;
                        case 'textarea':
                            $(this).append($('#form-textarea').clone());
                            break;
                        default:
                            ''
                    }
                    $('#droppable-area').removeClass('is-placeholder');
                },
            });

            $('#droppable-area').on('click', '.remove-this', function (event) {
                event.preventDefault();
                $(this).closest('.form-group').fadeOut(function () {
                    $(this).remove()
                });
            });
        }
    });



    // sortable init for taskDesign 
    $(function () {
        if ($('#addMilestone').length) {
            new Sortable(addMilestone, {
                animation: 150,
                easing: 'linear',
                handle: '.dragDrop',
            });
        }
        if ($('#addMilestoneSecond').length) {
            new Sortable(addMilestoneSecond, {
                animation: 150,
                easing: 'linear',
                handle: '.dragDrop',
            });
        }
    });


    // init all selectDropdown-init
    $(function () {
        if ($('.selectDropdown-init').length) {
            $('.selectDropdown-init').select2();
        }
    });


    // init all selectDropdown-init
    $(function () {
        if ($('.btnNavToggle').length) {
            $('.btnNavToggle').on('click', function () {
                $('.responsiveMenu').toggleClass('is-vissible');
            });
        }
    });


    // init all data table
    $(function () {
        if ($('#pendingQuotes').length) {
            $('#pendingQuotes').DataTable({
                responsive: true,
                "pageLength": 10,
                language: {
                    searchPlaceholder: "Search task . . ."
                },

                "oLanguage": {
                    "lengthMenu": "Show _MENU_ ",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
        if ($('#allProject').length) {
            $('#allProject').DataTable({
                responsive: true,
                "pageLength": 10,
                language: {
                    searchPlaceholder: "Search task . . ."
                },

                "oLanguage": {
                    "lengthMenu": "Show _MENU_ ",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
        if ($('#milestoneTemplates').length) {
            $('#milestoneTemplates').DataTable({
                responsive: true,
                "pageLength": 10,
                language: {
                    searchPlaceholder: "Search task . . ."
                },
                "oLanguage": {
                    "lengthMenu": "Show _MENU_ ",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
        if ($('#openTickets').length) {
            $('#openTickets').DataTable({
                responsive: true,
                "pageLength": 10,
                language: {
                    searchPlaceholder: "Search Ticket . . ."
                },
                "oLanguage": {
                    "lengthMenu": "Show _MENU_ ",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
        if ($('#outstandingInvoices').length) {
            $('#outstandingInvoices').DataTable({
                responsive: true,
                "pageLength": 10,
                language: {
                    searchPlaceholder: "Search task . . ."
                },
                "oLanguage": {
                    "lengthMenu": "Show _MENU_ ",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
        if ($('#projectInvoices').length) {
            $('#projectInvoices').DataTable({
                responsive: true,
                "pageLength": 10,
                bFilter: false,
                "bLengthChange": false,
                "oLanguage": {
                    "lengthMenu": "",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
        if ($('#projectFiles').length) {
            $('#projectFiles').DataTable({
                responsive: true,
                "pageLength": 10,
                bFilter: false,
                "bLengthChange": false,
                "oLanguage": {
                    "lengthMenu": "",
                    "sInfo": "Showing _START_ to _END_ of _TOTAL_ Result",
                    "sSearch": '<a class="btn searchBtn" id="searchBtn"><img src="assets/img/search-icon.png" alt=""></a>'
                }
            });
        }
    });


    // tinyMCE
    if ($('.tinyMCE').length) {
        tinymce.init({
            selector: 'textarea.tinyMCE',
            height: 300,
            menubar: false,
            branding: false,
            statusbar: false,
            plugins: 'autoresize',
            plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        });
    }

    // custom tabs
    if ($('ul.tabs').length) {
        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');
            $('ul.tabs li').removeClass('current');
            $('.customTab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    }

    $(function () {
        if ($('.btn-addMore').length && $('.clone-body').length) {
            $(document).on('click', '.btn-addMore', function (event) {
                event.preventDefault();
                var $clone = $(this).closest('.clone-data').clone(true);
                var $newButtons = ` <span class="pm-d btn-removeMore"> <i class="ni ni-minus-sm"></i> </span>`;
                $clone.find('.btn-clone-action').html($newButtons).end().appendTo($(this).closest('.clone-body'));
            });

            $(document).on('click', '.btn-removeMore', function (event) {
                event.preventDefault();
                $(this).closest('.clone-data').remove();
            });
        }
    });



    // init all progressbar
    $(function () {
        $("[id$='-circle']").percircle();
    });


});
