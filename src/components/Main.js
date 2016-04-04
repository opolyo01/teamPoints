var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var ReactDataGrid = require('react-data-grid');

var RowRenderer = React.createClass({
 getRowStyle: function() {
   return {
     color: this.getRowBackground()
   }
 },
 getRowBackground: function() {
   	return this.props.row.points > 0 ?  'green' : 'red'
 },
 render: function() {
   //here we are just changing the style
   //but we could replace this with anything we liked, cards, images, etc
   //usually though it will just be a matter of wrapping a div, and then calling back through to the grid
   return (<div style={this.getRowStyle()}><ReactDataGrid.Row ref="row" {...this.props}/></div>)
 }
});

var Main = React.createClass({
	getInitialState: function() {
	    return {rows: [], originalRows: []};
	},
	componentDidMount: function() {
	    $.ajax({
	      url: "/categories",
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({rows: data, originalRows: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(status, err.toString());
	      }.bind(this)
	    });
	},
	handleGridSort : function(sortColumn, sortDirection){
	    var comparer = function(a, b) {
	      if(sortDirection === 'ASC'){
	        return (a[sortColumn] > b[sortColumn]) ? 1 : -1;
	      }else if(sortDirection === 'DESC'){
	        return (a[sortColumn] < b[sortColumn]) ? 1 : -1;
	      }
	    }
	    var rows = sortDirection === 'NONE' ? this.state.originalRows.slice(0) : this.state.rows.sort(comparer);
	    this.setState({rows : rows});
	},
	render: function(){
		var rowGetter = function(i){
		  return this.state.rows[i];
		}.bind(this);

		var columns = [
			{
			  key: 'name',
			  name: 'Category Name',
			  sortable : true
			},
			{
			  key: 'points',
			  name: 'Points',
			  sortable : true
			}
		];
		
		return(
			<ReactDataGrid
				onGridSort={this.handleGridSort}
			    columns={columns}
			    rowGetter={rowGetter}
			    rowsCount={this.state.rows.length}
			    minHeight={500} 
			    rowRenderer={RowRenderer} />
		);
	}
});

ReactDOM.render(<Main />, document.getElementById('app'));