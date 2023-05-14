import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export function Section({ title, children }) {
  return (
    <SectionEl>
      <h2>{title}</h2>
      {children}
    </SectionEl>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
