import { Controls } from "./index";

import css from "./Window.module.css";

type Props = {
	children: React.ReactNode;
};

export default function Window({ children }: Props) {
	return (
		<div className={css.container}>
			<div className={css.window}>
				<div className={css.header}>
					<Controls />
					<span>~/home/user/1mku</span>
				</div>
				<div className={css.content}>{children}</div>
			</div>
		</div>
	);
}
