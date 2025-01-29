import React from 'react';
import styles from './style.module.scss';

const renderContent = (content) => {
    return content.map((item, index) => {
        switch (item.type) {
            case 'heading':
                const HeadingTag = `h${item.level}`;
                return (
                    <HeadingTag key={index}>
                        {item.children.map((child, childIndex) => (
                            <React.Fragment key={childIndex}>
                                {renderContent([child])}
                            </React.Fragment>
                        ))}
                    </HeadingTag>
                );
            case 'paragraph':
                return (
                    <p className={styles.p} key={index}>
                        {item.children.map((child, childIndex) => (
                            <React.Fragment key={childIndex}>
                                {renderContent([child])}
                            </React.Fragment>
                        ))}
                    </p>
                );
            case 'list':
                const ListTag = item.format === 'unordered' ? 'ul' : 'ol';
                return (
                    <ListTag className={styles.ul} key={index}>
                        {item.children.map((child, childIndex) => (
                            <React.Fragment key={childIndex}>
                                {renderContent([child])}
                            </React.Fragment>
                        ))}
                    </ListTag>
                );
            case 'list-item':
                return (
                    <li className={styles.li} key={index} >
                        {item.children.map((child, childIndex) => (
                            <React.Fragment key={childIndex}>
                                {renderContent([child])}
                            </React.Fragment>
                        ))}
                    </li>
                );
            case 'text':
                return <React.Fragment key={index}>{item.text}</React.Fragment>;
            default:
                return null;
        }
    });
};

const ContentRenderer = ({ content }) => {
    return <div>{renderContent(content)}</div>;
};

export default ContentRenderer;