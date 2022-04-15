import './styles.css';

import Heading from '../Heading';
import Text from '../Text';

function Certificate({
    imageUrl,
    title,
    subTitle,
    authenticationCode,
    link
}) {
    return (
        <a className="certificate-container" href={link} target="_blank" rel="noreferrer">
            <img alt={title} src = {imageUrl} />
            <div className="certificate-right">
                <Heading color='#5CFF9B' fontSize={18}>{title}</Heading>
                <Heading fontWeight={400} fontSize={18}>{subTitle}</Heading>
                <Text fontSize={13}>{authenticationCode}</Text>
            </div>
        </a>
    )
}

export default Certificate;