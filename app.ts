import { match } from 'ts-pattern';

match('foo')
	.with('bar', _ => 'hello')
	.run();