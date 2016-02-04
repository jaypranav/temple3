/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

};




// POPULATE SELECT OPTOIN FORM ELEMENTS WITH INFORMATION FORM DB TABLE.
// GET ALL STAR INFO AND POPULATE THE FORM
var messageDelay = 2000;
var messageDelayLong = 4000;
function list_stars(usersstar)
{
	var listStars_url = "http://imajineweb.com/temple/list_stars.php";
	var items="";
	var items2;
	
	$.getJSON(listStars_url,function(data){
		items="<option>Select star</option>";
		$.each(data,function(index,item) 
        {
          items+="<option value='"+item.sid+"'>"+item.stars+"</option>";
		  items2+="<option value='"+item.sid+"'>"+item.stars+"</option>";
        });
        $("#starsign_list").html(items);
		$("#starsign_list-edit").html(items2);
		$("#starsignupdate_list").html(items2);
		$("#starsignupdate_list").val(usersstar).change();
		$("#starsignupdate_list option[value='" + usersstar + "']").attr("selected","true");
		
	});
};

function list_stars_registration()
{
	var listStars_url = "http://imajineweb.com/temple/list_stars.php";
	var items="";
	
	$.getJSON(listStars_url,function(data){
		items="<option>Select star</option>";
		$.each(data,function(index,item) 
        {
          items+="<option value='"+item.sid+"'>"+item.stars+"</option>";
        });
		$("form#register select#starsign_list-register").html(items);
		
	});
};

function list_offerings()
{
	var listOfferings_url = "http://imajineweb.com/temple/list_offerings.php";
	var items="<option>Select puja/offering</option>";
	var items2="<option>Search from offering list</option>";
	
	$.getJSON(listOfferings_url,function(data){
		$.each(data,function(index,item) 
        {
          items+="<option value='" + item.puja_title + "'>"+ item.puja_title +" - INR "+ item.puja_cost +"</option>";
		  items2+="<option value='" + item.puja_title + "'>"+ item.puja_title +"</option>";
        });
        $("#offering_list").html(items);
		$("#offering_list2").html(items2);
	});
};




// SETTING UP YEAR FACTOR OF ALL DROP DOWNS
function set_all_years()
{
	var d = new Date();
	var currentYear = d.getFullYear();
	var nextYear =  currentYear + 1;
	
	var offering_year = "<option>Year</option><option value='" + currentYear + "'>" + currentYear +"</option><option value='" + nextYear + "'>" + nextYear +"</option>";
	$("form#offering-form select#year").html(offering_year);
	$("form#searchOffering-form select#year").html(offering_year);
	
	var i = 100;
	var j;
	var nextYearSet = currentYear;
	var date_hundred_years = "<option>Year</option><option value='" + currentYear +"'>" + currentYear + "</option>";
	for(j=1; j<110; j++)
	{
		nextYearSet--;
		date_hundred_years+= "<option value='" + nextYearSet +"'>" + nextYearSet + "</option>";
	}
	$("form#addNewMember-form select#year").html(date_hundred_years);
	$("select#userYearUpdate").html(date_hundred_years);
	}
	
	function set_hundred_years()
	{
		var d = new Date();
		var currentYear = d.getFullYear();
		var nextYear =  currentYear + 1;
		
		var i = 100;
		var j;
		var nextYearSet = currentYear;
		var date_hundred_years = "<option>Year</option><option value='" + currentYear +"'>" + currentYear + "</option>";
		for(j=1; j<110; j++)
		{
			nextYearSet--;
			date_hundred_years+= "<option value='" + nextYearSet +"'>" + nextYearSet + "</option>";
		}
		return date_hundred_years;
		
	}
	
	

$(document).on( 'click', '#addnew', function(e) {
	  $('#addNewMember-form').css( 'visibility', 'visible' );
	  $('#addNewMember-form').css( 'z-index', 5000 );
	  $('#addNewMember-form').css( 'display', 'block');
	  $('#content').fadeTo( 'slow', .2 );
	  $('#addNewMember-form').fadeIn( 'slow', function() { $('#fname').focus();} );

    return false;
  } );
  $('a[href="#member-edit"]').click( function() {
	 
	  $('#updateMember-form').css( 'visibility', 'visible' );
	  $('#updateMember-form').css( 'z-index', 5000 );
	  $('#updateMember-form').css( 'display', 'block');
	  $('#content').fadeTo( 'slow', .2 );
    return false;
  } );
  
	$(document).on( 'click', '#search-icon', function(e) {
	  $('#searchOffering-form').css( 'visibility', 'visible' );
	  $('#searchOffering-form').css( 'z-index', 5000 );
	  $('#searchOffering-form').css( 'display', 'block');
	  // $('#content').fadeTo( 'slow', .2 );
    return false;
  } );  
  

// ------------------- EVERYTHING ABOUT MEMBERS -------------------

// FUNCTION TO ADD NEW MEMBER

$(document).on( 'click', '#addNewMember-btn', function(e) {
		var datastring = $("#addNewMember-form").serialize();
		var uid = window.localStorage["parentIdTemple"];
		datastring = "pid=" + uid + "&" + datastring;
		alert("ADD OFFERER: " + datastring);
		var add_member_url = "http://imajineweb.com/temple/add-offerer.php";
		
		// CHECKING FOR MINIMUM FIELDS TO BE FILLED IN?
			
			if ( !$('#addNewMember-form #fname').val()) {
			
			$('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
			$('#addNewMember-form').fadeOut().delay(messageDelay).fadeIn();
			
 	 } else {
		 $('#sendingMessage').fadeIn();
    	 $('#addNewMember-form').fadeOut();
		$.ajax({
			 url: add_member_url,
			 data: datastring, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() {
					 $('#sendingMessage').fadeOut();
					 $('#sendingMessage').css( 'visibility', 'hidden' );
					 $('#sendingMessage').css( 'z-index', '-20' );
					 
					 retrieveLatestMember();
					 },
					 success: function (result) {
					},
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  
	 }
		
		e.preventDefault(); // cancel original event to prevent form submitting
});
	
// FUNCTION TO POPUP EDIT FORM WITH MEMBER'S INFORMATION WHEN 'EDIT MEMBER' LINK IS CLICKED
	$(document).on( 'click', '#member-edit', function(e) {
			var memberid = $(this).data('id');
			var member_details_url = "http://imajineweb.com/temple/details-member.php";
			
			
			$.ajax({
			 url: member_details_url,
			 data: {"uid": memberid, }, 
			 dataType:'JSON',
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() {
					 
					 $('#updateMember-form').css( 'visibility', 'visible' );
					 $('#updateMember-form').css( 'z-index', 5000 );
					 $('#updateMember-form').css( 'display', 'block' );
					 $('#content').fadeTo( 'slow', .2 );
				 
				 },
					 success: function (data) {
						 $.each(data,function(index,item) 
						 {
							 var DOB = item.birth_date;
							 var DOB2 = DOB.split("-");
							 var year = DOB2[0];
							 var month = DOB2[1];
							 var day = DOB2[2];
							 $("#updateMember-form #uid-edit").val(item.uid);
							 $("#updateMember-form #fname-edit").val(item.full_name);
							 
							 $("#updateMember-form #day-edit option:selected").text(day);
							 $("#updateMember-form #month-edit option:selected").text(month);
							 $("#updateMember-form #year-edit option:selected").text(year);
							
							 $("#updateMember-form #starsign_list-edit option[value='" + item.star_sign + "']").attr("selected","true");
							 var selectedOption =  $('#updateMember-form #starsign_list-edit').find('option:selected').text();
							 $("#updateMember-form #starsign_list-edit-button span").text(selectedOption);
							 
							 if(item.address)
							 {
								 $("#updateMember-form #address-edit").val(item.address);
							  }
							});
					},
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  
				e.preventDefault();
	});
	
	
// FUNCTION TO DELETE MEMBER INFORMATION	
		$(document).on( 'click', '#member-delete', function(e) {
			var memberid = $(this).data('id');
			var delete_url = "http://imajineweb.com/temple/delete-member.php";
			
			$.ajax({
			 url: delete_url,
			 data: {"uid": memberid, }, 
			 dataType:'JSON',
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { list_members(); },
					 success: function (result) { },
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  
				e.preventDefault();
	});
	
// LIST ALL MEMBER NAMES IN MEMBERS PAGE
function list_members()
{
	
	if(window.localStorage["parentIdTemple"])
	{ 
	pid = window.localStorage["parentIdTemple"];
	var listMembers_url = "http://imajineweb.com/temple/list_members.php";
	var items ="";
	
	var user_id = window.localStorage["parentIdTemple"];
	var user_fname = window.localStorage["fnameTemple"];
	var items2 ="<option>Select Name</option><option value='"+user_id+"'>" + user_fname +"</option>";
	
	 $.ajax({
			 url: listMembers_url,
			 data: {pid: pid}, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (result) {
						 $.each(result,function(index,item) 
						 {
							
							 items+="<li><member>" + item.full_name + "</member><a href='#' id='member-edit' data-id='" + item.uid+"'> </a> <a href='#' id='member-delete' data-id='" + item.uid+"'> </a></li>";
							  items2+="<option value='"+item.uid+"'>" + item.full_name +"</option>";
							});
							
							$("#member_list").html(items);
							$("#offerers_list").html(items2); 
						 },
						 	error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				}); 
	}
};

// UPDATE MEMBER LIST WITH LATEST MEMBER
function retrieveLatestMember()
{
	
	if(window.localStorage["parentIdTemple"])
	{ 
	pid = window.localStorage["parentIdTemple"];
	var recentMembers_url = "http://imajineweb.com/temple/recent_member.php";
	var items="";
	
	 $.ajax({
			 url: recentMembers_url,
			 data: {pid: pid}, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (result) {
						 $.each(result,function(index,item) 
						 {
							 items+="<li><member>" + item.full_name +"</member><a href='#' id='member-edit' data-id='" + item.uid+"'> </a> <a href='#' id='member-delete' data-id='" + item.uid+"'> </a></li>";
							
							});
						$("#member_list").prepend(items); 
						 },
						 	error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				}); 
	}
};

// FUNCTION TO UPDATE MEMBER DETAILS
$(document).on( 'click', '#updateMember-btn', function(e) {
	var datastring = $("#updateMember-form").serialize();
	var edit_member_url = "http://imajineweb.com/temple/update-member.php";
		
			
		if ( !$('#updateMember-form #fname-edit').val()) {
			
			// No; display a warning message and return to the form
			$('#incompleteMessage').fadeIn().delay(messageDelay).fadeOut();
			$('#updateMember-form').fadeOut().delay(messageDelay).fadeIn();
			
			} else {
			$('#sendingMessage').fadeIn();
    		$('#updateMember-form').fadeOut();
			
			$.ajax({
			 url: edit_member_url,
			 data: datastring, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() {
					 $('#sendingMessage').fadeOut();
					 $('#updateMember-form').fadeOut();
					 $('#updateMember-form').css( 'visibility', 'hidden' );
					$('#updateMember-form').css( 'z-index', -11 );
					 list_members();
					 },
					 success: function (result) {
						 // alert(result);
                    },
					// error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  
	 }
		
		e.preventDefault(); // cancel original event to prevent form submitting
});


// FUNCTION FOR FORM TO DISSAPPEAR WHEN CANCEL BUTTON IS CLICKED
$(document).on( 'click', '#addNewMember-form #cancel', function(e) {
 
  	$('#addNewMember-form').fadeOut();
	$('#addNewMember-form').css( 'visibility', 'hidden' );
	$('#addNewMember-form').css( 'z-index', -10 );
	e.preventDefault();
	});  
	
// FUNCTION FOR UPDATE FORM TO DISSAPPEAR WHEN CANCEL BUTTON IS CLICKED
$(document).on( 'click', '#updateMember-form #cancelUpdate-btn', function(e) {
 
  	$('#updateMember-form').fadeOut();
	$('#updateMember-form').css( 'visibility', 'hidden' );
	$('#updateMember-form').css( 'z-index', -10 );
	e.preventDefault();
	});
 
// ---------------------- END OF MEMBER FUNCTIONS - ADD / EDIT / DELETE / LIST / ADD TO LIST / DELETE FROM LIST ---------------------------


// -------------------------- OFFERING RELATED FUNCTIONS. EXAMPLE- MAKE AN OFFERING --------------------//

// SUBMIT AN OFFERING FUNCTION
$(document).on( 'click', '#offering-btn', function(e) {
	
	name = $("form#offering-form #offerers_list option:selected").text();
	offering = $("#offering_list option:selected").text();
	day = $("form#offering-form #day option:selected").text();
	month = $("form#offering-form #month option:selected").text();
	year = $("form#offering-form #year option:selected").text();
	
	if(name != "Select Name")
	{
		if(offering != "Select puja/offering")
		{
			if(day != "Day" || month != "Month" || year != "Year")
			{
				var updated_credit = subtract_offering_cost_from_credit();
				if(updated_credit < 0)
				{
					alert("Sorry, not sufficient credit to make this offer. Kindly recharge");
				}
				else
				{ 
					var add_offerer_url = "http://imajineweb.com/temple/add-offering.php";
					offerer_name = "&offerer_name=" + name;
					parent_id = window.localStorage["parentIdTemple"];
					parent_id ="&parent_id="+parent_id; 
					new_credit_value = "&credits=" + updated_credit;
					var datastring = $("#offering-form").serialize();
					datastring+= offerer_name + parent_id + new_credit_value;
					
					$.ajax({
			 			url: add_offerer_url,
			 			data: datastring, // Convert a form to a JSON string representation
			 			type: 'post', 
			 			async: true,
			 
			 			beforeSend: function() { },
				 		complete: function() { },
					 	success: function (result) {
							$("#page-title #credit").html("Credits: " + result);
							$('#offering_status_message #sendingMessage').fadeIn().delay(messageDelayLong).fadeOut();
							
						 	//alert("Your offering request has been sent");
							$("form#offering-form #offerers_list option:selected").text("Select Name");
							$("#offering_list option:selected").text("Select puja/offering");
							$("form#offering-form #day option:selected").text("Day");
							$("form#offering-form #month option:selected").text("Month");
							$("form#offering-form #year option:selected").text("Year");
                    	},
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
					});  
				}
				}
				else
				{
					alert("Kindly select the complete date - Day, Month and Year"); 
				}
			}
			else{ alert("Please select the offering");}
			}
			else
			{
				alert("Please select the name");
			}
 e.preventDefault();
});

$(document).on('change', 'form#offering-form select#offering_list', function(){
	var updated_credit = subtract_offering_cost_from_credit();
	
	if(updated_credit < 0)
	{
		alert("Sorry, not sufficient credit to make this offer. Kindly recharge");
	}

});

function subtract_offering_cost_from_credit()
{
	var selected_offering = $("form#offering-form select#offering_list option:selected").text();
	var selected_offering_split = selected_offering.split("INR ");
	var selected_offering_cost = selected_offering_split[1];
	
	var credits = $("#dashboard #page-title div#credit").text();
	var credits_string_split = credits.split(" ");
	var credit_available = credits_string_split[1];
	var updated_credit = credit_available - selected_offering_cost;
	
	return updated_credit;
	
}



// LIST ALL THE OFFERINGS MADE BY THE USER - USER'S OFFERING HISTORY LIST
function list_offering_history()
{
	
	if(window.localStorage["parentIdTemple"])
	{ 
	pid = window.localStorage["parentIdTemple"];
	var listMembers_url = "http://imajineweb.com/temple/list_offering_history.php";
	var items ="";
	
	 $.ajax({
			 url: listMembers_url,
			 data: {pid: pid}, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (result) {
						$.each(result,function(index,item) 
						 {
							
							 items+="<li><member>" + item.offerer_name +"</member><offering>" + item.puja_offering +"</offering><date-offering>" + item.date_offering +"</date-offering><status>" + item.status +"</status></li>";
							});
						$("#offering-history").html(items);
						pagination_offer_history_listing(); 
						 },
						 	error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				}); 
	}
};

// *********************** PAGINATION FOR OFFER HISTORY LISTING ****************************

function pagination_offer_history_listing()
{
	//how much items per page to show  
    var show_per_page = 5;  
    //getting the amount of elements inside content div  
    var number_of_items = $('#offering-history').children().size();  
    //calculate the number of pages we are going to have  
    var number_of_pages = Math.ceil(number_of_items/show_per_page);  
  
    //set the value of our hidden input fields  
    $('#current_page').val(0);  
    $('#show_per_page').val(show_per_page);  
  
    //now when we got all we need for the navigation let's make it '  
  
    /* 
    what are we going to have in the navigation? 
        - link to previous page 
        - links to specific pages 
        - link to next page 
    */  
    var navigation_html = '<a class="previous_link" href="javascript:previous();">Prev</a>';  
    var current_link = 0;  
    while(number_of_pages > current_link){  
        navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';  
        current_link++;  
    }  
    navigation_html += '<a class="next_link" href="javascript:next();">Next</a>';  
  
    $('#page_navigation').html(navigation_html);  
  
    //add active_page class to the first page link  
    $('#page_navigation .page_link:first').addClass('active_page');  
  
    //hide all the elements inside content div  
    $('#offering-history').children().css('display', 'none');  
  
    //and show the first n (show_per_page) elements  
    $('#offering-history').children().slice(0, show_per_page).css('display', 'block'); 
	
}

function previous(){  
  
    new_page = parseInt($('#current_page').val()) - 1;  
    //if there is an item before the current active link run the function  
    if($('.active_page').prev('.page_link').length==true){  
        go_to_page(new_page);  
    }  
  
}  
  
function next(){  
    new_page = parseInt($('#current_page').val()) + 1;  
    //if there is an item after the current active link run the function  
    if($('.active_page').next('.page_link').length==true){  
        go_to_page(new_page);  
    }  
  
}  
function go_to_page(page_num){  
    //get the number of items shown per page  
    var show_per_page = parseInt($('#show_per_page').val());  
  
    //get the element number where to start the slice from  
    start_from = page_num * show_per_page;  
  
    //get the element number where to end the slice  
    end_on = start_from + show_per_page;  
  
    //hide all children elements of content div, get specific items and show them  
    $('#offering-history').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');  
  
    /*get the page link that has longdesc attribute of the current page and add active_page class to it 
    and remove that class from previously active page link*/  
    $('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');  
  
    //update the current page input field  
    $('#current_page').val(page_num);  
} 


// ***********************END OF PAGINATION FOR OFFER HISTORY LISTING **************************** 

 
// SEARCH OFFERING LIST FOR ADMIN
$(document).on( 'click', '#searchOffering-btn', function(e) {
	var search_offerer_url = "http://imajineweb.com/temple/admin-search-offering.php";
	var datastring="user=admin";
	var noData=0;
	
	
	if($('#searchOffering-form #fullname').val())
	{
		datastring += "&fullname=" + $('#searchOffering-form #fullname').val();
	}
	else
	{
		datastring += "&fullname=nothing";
		noData++;
		
	}
	
	
	if($('#searchOffering-form #day option:selected').val() != "Day")
	{
		datastring += "&day=" + $('#searchOffering-form #day option:selected').val();
	}
	else
	{
		datastring += "&day=nothing";
		noData++;
	}
	
	
	if($('#searchOffering-form #month option:selected').val() != "Month")
	{
		datastring += "&month=" + $('#searchOffering-form #month option:selected').val();
	}
	else
	{
		datastring += "&month=nothing";
		noData++;
	}
	
	if($('#searchOffering-form #year option:selected').val() != "Year")
	{
		datastring += "&year=" + $('#searchOffering-form #year option:selected').val();
	}
	else
	{
		datastring += "&year=nothing";
		noData++;
	}
	if($('#searchOffering-form #offering_list2 option:selected').val() != "Search from offering list")
	{
		datastring += "&puja=" + $('#searchOffering-form #offering_list2 option:selected').val();
	}
	else
	{
		datastring += "&puja=nothing";
		noData++;
	}
	if(noData == 5)
	{
		alert("Please provide search data");
	}
	else
	{
		$.ajax({
			 url: search_offerer_url,
			 data: datastring, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (result) {
						 $("div#list-data-for-admin").html(result); 
						 $('#searchOffering-form').css( 'visibility', 'hidden' );
						  $('#searchOffering-form').css( 'z-index', -10 );
						  },
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  
		
		}
	e.preventDefault();
});

$(document).on( 'click', '#searchOffering-form #cancel', function(e) {
 
  	$('#searchOffering-form').fadeOut();
	$('#searchOffering-form').css( 'visibility', 'hidden' );
	$('#searchOffering-form').css( 'z-index', -10 );
	e.preventDefault();
	});  

$(document).on( 'click', '#show-offering-initial-list', function(e) {
	admin_list_offerings();
	e.preventDefault();
	});  

// -------------------------- END OF OFFERING RELATED FUNCTIONS --------------------//


//------------------------LIST PROFILE DETAILS -------------------------------//
	
function readytologin(e)
{
	e.preventDefault();
};

function register11(e)
{
	//var fname = document.getElementById('fname').textContent;
		 
};

jQuery( document ).ready( function($) {
	$("div#header h1").html("DURGA TEMPLE");
	$("form#register select#year").html(set_hundred_years());
	list_stars_registration();
	
	
	var messageDelay = 2000;
	$(document).on('load', '#login', function(e) {
		if(window.localStorage["emailTemple"] != undefined && window.localStorage["passwordTemple"] != undefined) {
			window.location.replace("http://imajineweb.com/temple/index.html#login");
			
			
		}
	});
	
	
	function is_user_logged_in()
	{
		if(window.localStorage["emailTemple"] != undefined && window.localStorage["passwordTemple"] != undefined)
		{
			return true;	
		}
		else
		{
			window.location.replace("http://imajineweb.com/temple/index.html#login");
		}
	}
	
	checkPreAuth();
	list_stars(); 
	list_members();
	list_offerings();
	set_all_years();
	list_offering_history();
	/* admin_list_offerings();
	*/
	 
	
	// CHECKING LOCAL STORAGE FOR LOGIN CREDENTIALS
	function checkPreAuth() {
		
		if(window.localStorage["emailTemple"] != undefined && window.localStorage["passwordTemple"] != undefined ) {
			$("#email").val(window.localStorage["emailTemple"]);
			$("#pwd").val(window.localStorage["passwordTemple"]);
			handlelogin();
			}
			else {
				 window.location.replace("http://imajineweb.com/temple/index.html#login");
			}
		}
	
	// REGISTRATION SUBMISSION
	
	$("#register-btn").click(function(e) {
		
		// VALIDATE EMAIL
		var email = $("form#register #email").val();
		
		if( !isEmail(email)) { alert("Incorrect Email ID"); }
		else{
			$("#div-register-form #sendingMessage").fadeIn();
			var datastring = $("form#register").serialize();
			var register_url = "http://imajineweb.com/temple/insert-user.php";
			$.ajax({
			 url: register_url,
			 data: datastring, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (result) { 
					 $("#div-register-form #sendingMessage h2").html("Please check your email and complete the last step to your registration");
					 $('#div-register-form #sendingMessage').fadeIn().delay(messageDelay).fadeOut();
					 
					 var passcode = result.passcode;
					 var email = result.email;
					 var datastring2 = "passcode=" + passcode + "&email=" + email;
					 var send_email_url = "http://imajineweb.com/temple/send-email.php";
					 $.ajax({
						 url: send_email_url,
						 data: datastring2, // Convert a form to a JSON string representation
						 type: 'post',
						 async: true,
						 success: function (result) { }
						 
					 });
					 
					 
					// alert("result: " + result);
					 },
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				}); 
		}
				
				e.preventDefault();  
			
	});
	
	
	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		return regex.test(email);
		}
	
	function handlelogin()
	{
		var email = $("#email").val();
		if(isEmail(email)) { 
		var pass = $("#pwd").val();
		var datastring = $("#loginForm").serialize();
		alert("datastring: " + datastring);
		var getuser_url = "http://imajineweb.com/temple/get-user.php";
		 $.ajax({
			 url: getuser_url,
			 data: datastring, 
			 dataType:'json',
			 type: 'POST', 
			 async: true,
			 
			 beforeSend: function() { },
			 complete: function() { },
			 success: function (data) { 
			 
			 //STORE LOGIN CREDENTIALS
			 window.localStorage["parentIdTemple"] = data.id;
			 window.localStorage["emailTemple"] = email;
			 window.localStorage["passwordTemple"] = pass;
			 window.localStorage["fnameTemple"] = data.fname;
			 window.localStorage["usertypeTemple"] = data.usertype;
			 //window.localStorage["creditsTemple"] = data.credits
			 
			 
			 if(data.usertype == "admin"){ 
			 list_stars(); 
			 list_offerings();
			 set_all_years();
			 admin_list_offerings();
			 $("#profile-name").html("<a href='#profile-page'>"+ data.fname + "</a>");
			 $("div#header h1").html("DURGA TEMPLE ADMIN");
			 window.location.replace("http://imajineweb.com/temple/admin.html#dashboard"); 
			 }
			 else{
				 list_stars(data.star_sign); 
				 list_members();
				 list_offerings();
				 set_all_years();
				 list_offering_history();
				// list_profile_details();
				 
				 $("#dashboard #page-title #profile-name").html("<a href='#profile-page'>" + data.fname + "</a>");
				 $("#offering-page #page-title #profile-name").html("<a href='#profile-page'>" + data.fname + "</a>");
				 $("#offering-history-page #page-title #profile-name").html("<a href='#profile-page'>" + data.fname + "</a>");
				 $("#members-page #page-title #profile-name").html("<a href='#profile-page'>" + data.fname + "</a>");
				 
				 $("#dashboard #header h1").html("DURGA TEMPLE");
				 $("#offering-page #header h1").html("DURGA TEMPLE");
				 $("#offering-history-page #header h1").html("DURGA TEMPLE");
				 $("#members-page #header h1").html("DURGA TEMPLE");
				 
				 //DISPLAY ALL THE PROFILE INFORMATION
				 
				 $("#user-id").val(data.id);
				 $("li#userEmail").html(data.email);
				 
				 $("#userNameUpdate-txt").val(data.fname);
				 $("#userNameUpdate-txt").data("id", data.id);
				 $("ul#profile-details li#user userName span").html(data.fname);
				 // $("ul#profile-details li#user userNameUpdate").html("<input data-id='"+ data.id +"' id='userNameUpdate-txt' name='userNameUpdate' value='"+ data.fname +"'><button id='updateUserName-btn' class='update-btn'>UPDATE</button><button id='userNameUpdateCancel-btn' class='cancel-btn'>CANCEL</button>");
				 $("ul#profile-details li#userEmail userEmailEdit span").html(data.email);
				 
				 $("ul#profile-details li#userPhone userPhoneEdit span").html(data.phone);
				 $("#userPhoneUpdate-txt").val(data.phone);
				 $("#userPhoneUpdate-txt").data("id", data.id);
				 
				 var DOB = data.birth_date;
				 var DOB_split = DOB.split("-");
				 var DOB_year = DOB_split[0];
				 var DOB_month = DOB_split[1];
				 var DOB_day = DOB_split[2];
				 
				// $("#updateMember-form #day-edit option:selected").text(day);
				 $("ul#profile-details li#userDOB userDOB span").html(DOB);
				 
				 $("#userDayUpdate option:selected").text(DOB_day);
				 $("#userDayUpdate-button span").html(DOB_day); 
				 
				 $("#userMonthUpdate option:selected").text(DOB_month);
				 $("#userMonthUpdate-button span").html(DOB_month); 
				 
				 $("#userYearUpdate option:selected").text(DOB_year);
				 $("#userYearUpdate-button span").html(DOB_year);
				 
				 
				 $("ul#profile-details li#userStarSign StarSign span").html(data.star); 
				 
				 if(data.credits < 50)
				 {
					 var recharge_link = " <a href='#recharge' class='white-link-underline'>Recharge</a>";
					 $("#page-title #credit").html("Credits: " + data.credits + recharge_link);
					 $("#offering-page #page-title #credit").html("Credits: " + data.credits + recharge_link);
					 $("#offering-history-page #page-title #credit").html("Credits: " + data.credits + recharge_link);
					 $("#members-page #page-title #credit").html("Credits: " + data.credits + recharge_link);
					 
					}
				 else
				 {
				 	$("#page-title #credit").html("Credits: " + data.credits);
					$("#offering-page #page-title #credit").html("Credits: " + data.credits);
					$("#offering-history-page #page-title #credit").html("Credits: " + data.credits);
					$("#members-page #page-title #credit").html("Credits: " + data.credits);
				 }
				 window.location.replace("http://imajineweb.com/temple/index.html#dashboard");
				 }
			 },
			 error: function (request, status, error) { alert("Either email / password provided is wrong " + request.responseText); },
		 });
		 }
		 else{ alert("Email provided is not in correct format");}
		 
		 return false;
		
		
	}
		
/****************** PROFILE EDIT FUNCTIONS ***********************/ 	

/******** USERNAME UPDATE REGION *****************/	
		$("#editUserName-btn").click(function(e) {
			$("userName").css( 'visibility', 'hidden' );
		 	$("userNameUpdate").css( 'visibility', 'visible' );
			$("userNameUpdate").css( 'width', '100%' );
			$("userNameUpdate").css('height', 'auto' );
			$("userNameUpdate").css( 'display', 'block' );
			
		e.preventDefault();
	});
	
	$("#userNameUpdateCancel-btn").click(function(e) {
			$("userName").css( 'visibility', 'visible' );
		 	$("userNameUpdate").css( 'visibility', 'hidden' );
			$("userNameUpdate").css( 'width', '0' );
			$("userNameUpdate").css( 'display', 'none' );
			
		e.preventDefault();
	});
	
	$("#updateUserName-btn").click(function(e) {
		
		var username = $("#userNameUpdate-txt").val();
		if(username) { 
		var userid = $("#user-id").val();
		var datastring = "username=" + username + "&userid=" + userid;
		alert("datastring: " + datastring);
		var updateusername_url = "http://imajineweb.com/temple/update-user-name.php";
		 $.ajax({
			 url: updateusername_url,
			 data: datastring, 
			 dataType:'json',
			 type: 'POST', 
			 async: true,
			 
			 beforeSend: function() { },
			 complete: function() { },
			 success: function (data) { 
			 $("ul#profile-details li#user userName span").html(data.fullname);
			 $("userName").css( 'visibility', 'visible' );
			 $("userNameUpdate").css( 'visibility', 'hidden' );
			 $("userNameUpdate").css( 'width', '0' ); 
			 $("userNameUpdate").css( 'display', 'none' );
			 },
		 });
		}
		else
		{alert("Name field is empty");}
		e.preventDefault();
	});
	
	/******** END OF USERNAME UPDATE REGION *****************/	
	
	
	/******** CHANGE PHONE NUMBER UPDATE REGION *****************/	
	$("#editPhoneNumber-btn").click(function(e) {
			$("userPhoneEdit").css( 'visibility', 'hidden' );
		 	$("userPhoneUpdate").css( 'visibility', 'visible' );
			$("userPhoneUpdate").css( 'width', '100%' );
			$("userPhoneUpdate").css( 'height', 'auto' );
			$("userPhoneUpdate").css( 'display', 'block' );
			
		e.preventDefault();
	});
	$("#userPhoneUpdateCancel-btn").click(function(e) {
			$("userPhoneEdit").css( 'visibility', 'visible' );
		 	$("userPhoneUpdate").css( 'visibility', 'hidden' );
			$("userPhoneUpdate").css( 'width', '0' );
			$("userPhoneUpdate").css( 'height', '0' );
			$("userPhoneUpdate").css( 'display', 'none' );
			
		e.preventDefault();
	}); 
	
	$("#updatePhone-btn").click(function(e) {
		
		var phone = $("#userPhoneUpdate-txt").val();
		if(phone) { 
		var userid = $("#user-id").val();
		var datastring = "phone=" + phone + "&userid=" + userid;
		alert("datastring: " + datastring);
		var updatephone_url = "http://imajineweb.com/temple/update-phone.php";
		 $.ajax({
			 url: updatephone_url,
			 data: datastring, 
			 dataType:'json',
			 type: 'POST', 
			 async: true,
			 
			 beforeSend: function() { },
			 complete: function() { },
			 success: function (data) { 
			 $("ul#profile-details li#userPhone userPhoneEdit span").html(data.userphone);
			$("userPhoneEdit").css( 'visibility', 'visible' );
		 	$("userPhoneUpdate").css( 'visibility', 'hidden' );
			$("userPhoneUpdate").css( 'width', '0' );
			$("userPhoneUpdate").css( 'height', '0' );
			$("userPhoneUpdate").css( 'display', 'none' );
			 },
		 });
		}
		else
		{alert("Phone field is empty");}
		e.preventDefault();
	});
	/******** END OF CHANGE PHONE NUMBER UPDATE REGION *****************/	
	
	/******** CHANGE DOB UPDATE REGION *****************/
	
	$("#editDOB-btn").click(function(e) {
		$("userDOB").css( 'visibility', 'hidden' );
		$("userDOBUpdate").css( 'visibility', 'visible' );
		$("userDOBUpdate").css( 'width', '100%' );
		$("userDOBUpdate").css( 'height', 'auto' );
		$("userDOBUpdate").css( 'display', 'block' );
		e.preventDefault();
	});
	
	$("#DOBUpdateCancel-btn").click(function(e) {
		$("userDOB").css( 'visibility', 'visible' );
		$("userDOBUpdate").css( 'visibility', 'hidden' );
		$("userDOBUpdate").css( 'width', '0' );
		$("userDOBUpdate").css( 'height', '0' );
		$("userDOBUpdate").css( 'display', 'none' );
		e.preventDefault();
	});
	
	$("#updateDOB-btn").click(function(e) {
		
		var day = $("#userDayUpdate option:selected").text();
		var month = $("#userMonthUpdate option:selected").text();
		var year = $("#userYearUpdate option:selected").text();
		
		if(day != null || month != null || year != null) { 
		var userid = $("#user-id").val();
		var datastring = "day=" + day + "&month=" + month + "&year= " + year + "&userid=" + userid;
		alert("datastring: " + datastring);
		var updatedob_url = "http://imajineweb.com/temple/update-dob.php";
		 $.ajax({
			 url: updatedob_url,
			 data: datastring, 
			 dataType:'json',
			 type: 'POST', 
			 async: true,
			 
			 beforeSend: function() { },
			 complete: function() { },
			 success: function (data) { 
			 
			 $("ul#profile-details li#userDOB userDOB span").html(data.userdob);
			 $("userDOB").css( 'visibility', 'visible' );
			 $("userDOBUpdate").css( 'visibility', 'hidden' );
			 $("userDOBUpdate").css( 'width', '0' );
			 $("userDOBUpdate").css( 'height', '0' );
			 $("userDOBUpdate").css( 'display', 'none' );
			 },
		 });
		}
		else
		{alert("day or month or year field is empty");}
		e.preventDefault();
	});
	
	
	/******** END OF CHANGE DOB UPDATE REGION *****************/
	
	$("#editUserStarSign-btn").click(function(e) {
		$("StarSign").css( 'visibility', 'hidden' );
		$("StarSignUpdate").css( 'visibility', 'visible' );
		$("StarSignUpdate").css( 'width', '100%' );
		$("StarSignUpdate").css( 'height', 'auto' );
		$("StarSignUpdate").css( 'display', 'block' );
		e.preventDefault();
	});
	
	$("#starUpdateCancel-btn").click(function(e) {
		$("StarSign").css( 'visibility', 'visible' );
		$("StarSignUpdate").css( 'visibility', 'hidden' );
		$("StarSignUpdate").css( 'width', '0' );
		$("StarSignUpdate").css( 'height', '0' );
		$("StarSignUpdate").css( 'display', 'none' );
		e.preventDefault();
	});
	
	$("#updateStar-btn").click(function(e) {
		var star_updated = $("#starsignupdate_list option:selected").text();
		var star_value_updated = $("#starsignupdate_list option:selected").val();
		alert(star_updated + " - " + star_value_updated);
		
		if(star_updated != null) { 
		var userid = $("#user-id").val();
		var datastring = "star_updated=" + star_value_updated + "&userid=" + userid;
		alert("datastring: " + datastring);
		var updatestar_url = "http://imajineweb.com/temple/update-star.php";
		 $.ajax({
			 url: updatestar_url,
			 data: datastring, 
			 dataType:'json',
			 type: 'POST', 
			 async: true,
			 
			 beforeSend: function() { },
			 complete: function() { },
			 success: function (data) { 
			 
			 $("ul#profile-details li#userStarSign StarSign span").html(star_updated);
			 $("StarSign").css( 'visibility', 'visible' );
			 $("StarSignUpdate").css( 'visibility', 'hidden' );
			 $("StarSignUpdate").css( 'width', '0' );
			 $("StarSignUpdate").css( 'height', '0' );
			 $("StarSignUpdate").css( 'display', 'none' );
			 },
		 });
		}
		else
		{alert("day or month or year field is empty");} 
		
		e.preventDefault();
	});
	
	
	
	/*
	$("#editUserEmail-btn").click(function(e) {
		alert("edit user email");
			$("userEmailEdit").css( 'visibility', 'hidden' );
		 	$("userEmailUpdate").css( 'visibility', 'visible' );
			$("userEmailUpdate").css( 'width', '100%' );
			$("userEmailUpdate").css( 'height', 'auto' );
			$("userEmailUpdate").css( 'display', 'block' );
			
		e.preventDefault();
	});
	*/
	
	$("#userEmailUpdateCancel-btn").click(function(e) {
		alert("edit user email");
			$("userEmailEdit").css( 'visibility', 'visible' );
		 	$("userEmailUpdate").css( 'visibility', 'hidden' );
			$("userEmailUpdate").css( 'width', '0' );
			$("userEmailUpdate").css( 'height', '0' );
			$("userEmailUpdate").css( 'display', 'none' );
			
		e.preventDefault();
	});
	
	
	
		
	
	
	// LOGIN 
	$("#login-btn").click(function(e) {
		handlelogin();
		e.preventDefault();
	});
	
	$("#logOut").click(function() {
		window.localStorage.removeItem("parentIdTemple");
		window.localStorage.removeItem("emailTemple");
		window.localStorage.removeItem("passwordTemple");
		window.localStorage.removeItem("fnameTemple");
		
		window.location.replace("http://imajineweb.com/temple/index.html#login");
		
	});
	
	$("#dashboard #logOut-btn").click(function() { logout(); });
	$("#members-page #logOut-btn").click(function() { logout(); });
	$("#offering-page #logOut-btn").click(function() { logout(); });
	$("#offering-history-page #logOut-btn").click(function() { logout(); });
	$("#recharge-credit-page #logOut-btn").click(function() { logout(); });
	
function logout()
{
	window.localStorage.removeItem("parentIdTemple");
	window.localStorage.removeItem("emailTemple");
	window.localStorage.removeItem("passwordTemple");
	window.localStorage.removeItem("fnameTemple");
	
	window.location.replace("http://imajineweb.com/temple/index.html#login");
}	
	
	// NAVIGATION LINK
	$("#offering-link").click(function(){
		if(is_user_logged_in()){
			var fname = window.localStorage["fnameTemple"];
			$("#profile-name").html(fname);
			window.location.replace("http://imajineweb.com/temple/index.html#offering-page");
		}
	});
	
	$("#members-link").click(function(){
		if(is_user_logged_in()){
			window.location.replace("http://imajineweb.com/temple/index.html#members-page");
		}
	});
	$("#credits-link").click(function(){
		if(is_user_logged_in()){
			window.location.replace("http://imajineweb.com/temple/index.html#credits-page");
		}
	});
	
	
	
/*************************** ALL, ALL ABOUT ADMIN REGION *********************************/

// POPULATING SEARCH FORM OFFERING SELECT DROP-DOWN

function admin_list_offerings()
{
	var listOfferings_url = "http://imajineweb.com/temple/admin-list-offerings.php";
	
	$.ajax({
			 url: listOfferings_url,
			 type: 'GET', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (data) {
						
						 $("div#list-data-for-admin").html(data); 
                    },
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  

}


// UPDATE USER CREDIT
$(document).on( 'click', '#updateCredit-btn', function(e) {
	var datastring = $("#updateCredit-form").serialize();
	var update_credit_url = "http://imajineweb.com/temple/update-user-credit.php";
	
		$.ajax({
			 url: update_credit_url,
			 data: datastring, // Convert a form to a JSON string representation
			 type: 'post', 
			 async: true,
			 
			 beforeSend: function() { },
				 complete: function() { },
					 success: function (result) { },
					error: function (request, status, error) { alert("STATUS: " + request.responseText); },
				});  
	
	e.preventDefault();
	
	}); 

	
 });