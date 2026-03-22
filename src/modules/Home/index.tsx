import clsx from 'clsx';
import { motion } from 'framer-motion';
import Typography from '@/components/Typography/Typography';
import Counter from './components/Counter';
import s from './style.module.css';

const STACK = [
    { name: 'Vite 6', role: 'Build tool — instant HMR, optimized prod bundles', color: '#646cff' },
    { name: 'React 19', role: 'UI library — concurrent rendering, actions', color: '#61dafb' },
    { name: 'TypeScript 5', role: 'Strict mode, path aliases, project refs', color: '#3178c6' },
    { name: 'TanStack Router', role: 'Type-safe routing, lazy routes, code-gen', color: '#ff4154' },
    { name: 'TanStack Query', role: 'Server state, caching, optimistic updates', color: '#f97316' },
    { name: 'Base UI + CSS Modules', role: 'Headless primitives, scoped styles, SCSS', color: '#a855f7' },
];

const ARCH = [
    { depth: 1, name: 'modules/', desc: 'page-level feature slices' },
    { depth: 2, name: 'Home/', desc: 'components · hooks · utils · schemas' },
    { depth: 1, name: 'components/', desc: 'shared UI (Button, Typography…)' },
    { depth: 1, name: 'services/', desc: 'API layer — queries · keys · types' },
    { depth: 1, name: 'hooks/', desc: 'global reusable hooks' },
    { depth: 1, name: 'lib/', desc: 'http · queryClient · utils · schemas' },
    { depth: 1, name: 'routes/', desc: 'TanStack Router file-based routes' },
    { depth: 1, name: 'styles/', desc: 'index.css · reset · breakpoints' },
];

const Home: React.FC = () => {
    return (
        <main className={clsx(s.page, 'full-height')}>
            <div className={s.mStripe}>
                <span className={s.s1} />
                <span className={s.s2} />
                <span className={s.s3} />
            </div>

            <div className={s.hero}>
                <span className={s.badge}>RKR Template v1.0</span>
                <Typography variant="heading-3xl" className={s.title}>
                    Your next project <br /> starts <span className={s.accent}>here</span>
                </Typography>
                <Typography variant="body-lg" className={s.subtitle}>
                    A production-ready React + TypeScript template with a curated stack, strict tooling, and sane
                    defaults out of the box.
                </Typography>
                <code className={s.cmd}>
                    <span className={s.prompt}>$</span>
                    gh repo create my-project --template ruslan-krasiuk/rkr-template --clone
                </code>

                <motion.img
                    src="/logos/BMW-logo.png"
                    alt="BMW"
                    className={s.logo}
                    initial={{ opacity: 0, scale: 0.7, rotate: -20 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    draggable={false}
                />
                <h1 className={s.title}>BMW Performance</h1>
            </div>

            <section className={s.section}>
                <div className={s.sectionLabel}>Live demo — Counter (Engine replaces) component</div>
                <div className={s.counterWrap}>
                    <Counter />
                    <p className={s.counterHint}>useState · React.memo</p>
                </div>
            </section>

            <section className={s.section}>
                <div className={s.sectionLabel}>Stack</div>
                <div className={s.stackGrid}>
                    {STACK.map(({ name, role, color }) => {
                        return (
                            <div key={name} className={s.stackCard}>
                                <div className={s.cardDot} style={{ background: color }} />
                                <div>
                                    <div className={s.cardName}>{name}</div>
                                    <div className={s.cardRole}>{role}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className={s.divider} />

            <section className={s.section}>
                <div className={s.sectionLabel}>Architecture</div>
                <div className={s.arch}>
                    <div className={clsx(s.archRow, s.folder)}>
                        <span className={s.arIcon}>▸</span>
                        <code className={s.arName}>src/</code>
                    </div>
                    {ARCH.map(({ depth, name, desc }) => {
                        return (
                            <div key={name} className={clsx(s.archRow, depth === 2 && s.indent)}>
                                <span className={s.arIcon}>{depth === 2 ? '└' : '📁'}</span>
                                <code className={s.arName}>{name}</code>
                                <span className={s.arDesc}>{desc}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <div className={s.divider} />

            <footer className={s.footer}>
                <span className={s.footerLeft}>&copy;&nbsp;{new Date().getFullYear()}, Ruslan Krasiuk</span>
                <div className={s.chips}>
                    {['Node 20', 'pnpm', 'ESLint + Prettier', 'Husky'].map((c) => {
                        return (
                            <span key={c} className={s.chip}>
                                {c}
                            </span>
                        );
                    })}
                </div>
            </footer>
        </main>
    );
};

export default Home;
