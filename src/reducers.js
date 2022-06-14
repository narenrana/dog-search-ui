/*
 * Module Description :  Configure Redux App Store
 *
 * Revision History
 *
 * Date            Author             SR No          Description of Change
 * ----------      ----------         ------         ----------------------
 * 9-June-2020     Narender Kumar     Release1       Initial commit
 *
 * Copyright (c) aposailor.com.
 * All rights reserved.
 *
 * This software is the confidential and proprietary information of
 * aposailor.com ("Confidential Information").You shall not
 * disclose such Confidential Information and shall use it only in accordance
 * with the terms of the license agreement you entered into with aposailor.com
 */

import { combineReducers } from "redux";

import footerStore from "./footer/redux";
import headerStore from "./search/redux";
import dashboardStore from "./dashboard/redux";

const store = combineReducers({
  footerStore,
  headerStore,
  dashboardStore,
});

export default store;
