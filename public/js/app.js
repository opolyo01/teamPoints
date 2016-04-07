var crudServiceBaseUrl = "/categories";
var dataSource = new kendo.data.DataSource({
    transport: {
        read:  {
            url: crudServiceBaseUrl,
            dataType: "json",
            type: 'GET'
        },
        update: {
            url: function (options) {
                return '/categories/' + options.models[0]._id;
            },
            dataType: "json",
            type: 'PUT'
        },
        destroy: {
            url: function (options) {
                return '/categories/' + options.models[0]._id;
            },
            dataType: "json",
            type: 'DELETE'
        },
        create: {
            url: crudServiceBaseUrl,
            dataType: "json",
            type: 'POST'
        },
        parameterMap: function(options, operation) {
            if (operation === "update" && options.models) {
                return options.models[0];
            }
            else if (operation === "create" && options.models) {
                delete options.models[0]._id;
                return options.models[0];
            }
        }
    },
    batch: true,
    pageSize: 20,
    schema: {
        model: {
            id: "_id",
            fields: {
                name: {type: "string", validation: { required: true } },
                points: {type: "string", validation: { required: true } }
            }
        }
    },
    requestEnd: function(e) {
        if(e.type !== "read"){
            this.read();
        }
    }
});

$("#tabstrip").kendoTabStrip({
    animation:  {
        open: {
            effects: "fadeIn"
        }
    }
});

$("#grid").kendoGrid({
    dataSource: dataSource,
    sortable: {
        mode: "single",
        allowUnsort: false
    },
    pageable: true,
    toolbar: ["create"],
    columns: [
        { field: "name", title: "Category Name" },
        { field: "points", title:"Points" },
        { command: ["edit", "destroy"], title: "&nbsp;", width: "250px" }],
    editable: "inline"
});