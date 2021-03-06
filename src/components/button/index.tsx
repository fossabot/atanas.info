import * as React from 'react';

interface Props {
	href?: string;
	type?: 'submit' | 'reset' | 'button' | 'link';
	children?: React.ReactChild[] | React.ReactText;
	className?: string;
	onClick?: (...args: any[]) => any;
	[x: string]: any;
}

export const Button: React.FunctionComponent<Readonly<Props>> = (props: Readonly<Props>) => {
	const { href, type, children, className, onClick, ...rest } = props;
	const classes: string[] = className ? className.split(' ') : [''];
	const classNames: string = ['c-btn'].concat(classes).join(' ');

	return type === 'link' ? (
		<a href={href} className={classNames} {...rest}>
			{children}
		</a>
	) : (
		<button className={classNames} type={type} onClick={onClick} {...rest}>
			{children}
		</button>
	);
};

export default Button;
