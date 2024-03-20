import { Controls } from "./index";

import css from "./Window.module.css";

type Props = {
	children: React.ReactNode;
};

export default function Window({ children }: Props) {
	return (
		<div className={css.root}>
			<div className={css.header}>
				<Controls />
				~/home/user/1mku
			</div>
			<div className={css.content}>{children}</div>
		</div>
	);
}
