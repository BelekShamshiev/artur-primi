import React from 'react';
import s from './Coffee.module.css'
import logo from "../../assets/aqaqaq.png";
import asasas from "../../assets/ababab.png";
const LokBlock = () => {
	return (
		<div className={s.menu}>
			<img src={logo} alt="logo"/>
			<div className={s.menu_title}>
				<div className={s.menu_title_dection}>
					<h4>CAFFE LATTE</h4>
					<p>$ 15.00</p>
				</div>
				<p className={s.menu_title_p}>Pellentesque habitant morbi tristique senectus et netus et malesuada fames </p>
			</div>
		</div>
	);
};

export default LokBlock;