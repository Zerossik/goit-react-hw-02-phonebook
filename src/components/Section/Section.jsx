import PropTypes from 'prop-types';
import { SectionEl } from './Section.styled';

export function Section({ title }) {
  return (
    <SectionEl>
      <h2>{title}</h2>
    </SectionEl>
  );
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
