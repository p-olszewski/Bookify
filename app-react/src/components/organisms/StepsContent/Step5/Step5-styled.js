import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: 0px 0px 45px rgba(0, 0, 0, 0.1);
  padding: 30px 0px;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const GreenIconStyleWrapper = styled(IconStyleWrapper)`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const GreenTextWrapper = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0 30px;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 0px;
  border-radius: 0px 0px 30px 30px;
`;

export const Logo = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.logo};
  font-weight: 700; //raczej wrzuca 600 nie 700; dodać w theme?
  letter-spacing: 0.02em; //dodać w theme?
  &::first-letter {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    cursor: pointer;
  }
`;

export const WhiteButton = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  width: 120px;
  height: 40px;
  border-radius: 100px;
  font-weight: 700;
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 70px 30px;
`;

export const SectionHeader = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: 700;
  margin: 20px 0;
`;

export const TextSection = styled.div`
  margin: 15px 0;
  padding: 10px 0;
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 30%;
  border-radius: 5px;
  padding: 10px 20px;
`;

export const BottomMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding: 0 40px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  height: 80px;
  width: 100%;
  letter-spacing: 0.08em;
`;
