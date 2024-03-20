import css from "./Controls.module.css";
import cx from "clsx";

export default function Controls() {
	return (
		<div className={css.root}>
			<div className={cx(css.button, css.close)} />
			<div className={cx(css.button, css.minimize)} />
			<div className={cx(css.button, css.maximize)} />
		</div>
	);
}
