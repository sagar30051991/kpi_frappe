// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// MIT License. See license.txt

frappe.provide('frappe.desk.form');
frappe.provide('frappe.desk.report');
frappe.provide('frappe.utils');
frappe.provide('frappe.model');
frappe.provide('frappe.user');
frappe.provide('frappe.session');
frappe.provide('locals')
frappe.provide('locals.DocType')

// for listviews
frappe.provide("frappe.listview_settings");
frappe.provide("frappe.listview_parent_route");

// setup custom binding for history
frappe.settings.no_history = 1;

// constants
var NEWLINE = '\n';

// user
var user=null;
var user=null;
var user_defaults=null;
var user_roles=null;
var user_fullname=null;
var user_email=null;
var user_img = {};

// Name Spaces
// ============

// form
var _f = {};
var _p = {};
var _r = {};
var FILTER_SEP = '\1';

// API globals
var frms={};
var cur_frm=null;
