import * as React from 'react';
import SVG from 'react-inlinesvg';

interface Props {
	src: string;
	className?: string;
}

export const Svg: React.FunctionComponent<Readonly<Props>> = ({ src, className }: Readonly<Props>) => {
	const classes = ['c-svg-icon'].concat(className || '');

	return <SVG src={src} className={classes.join(' ')} />;
};

export default Svg;
