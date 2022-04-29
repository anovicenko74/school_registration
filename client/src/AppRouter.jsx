
import { Route, Routes, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from './router/index';
import LoginForm from "./components/LoginForm";
import React, { useContext, useEffect, useState } from 'react'
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import UserService from "./services/UserService";
import Pagination from "./components/UI/pagination/Pagination";
import Navbar from "./components/UI/navbar/Navbar";

const AppRouter = () => {

	const { store } = useContext(Context)

	if (!store.isAuth) {
		return (
			<Routes>
				{publicRoutes.map(route =>
					<Route
						element={route.component}
						path={route.path}
					/>
				)}
				<Route path="*" element={<Navigate replace to="/" exact />} />
			</Routes>
		)
	}
	return (
		<div>
			<Navbar></Navbar>
			<Routes>
				{privateRoutes.map(route =>
					<Route
						element={route.component}
						path={route.path}
					/>
				)})
				<Route path="*" element={<Navigate replace to="/posts" />} />
			</Routes>
		</div>

	)
};

export default observer(AppRouter); 