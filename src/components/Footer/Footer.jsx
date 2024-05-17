import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'COMPANY',
    links: [
      { label: 'About Us', link: '#' }
    ],
  },
  {
    title: 'PRODUCTS',
    links: [
      { label: 'Cash Remittance', link: '#' },
      { label: 'Grocery Remittance, ', link: '#' }
    ],
  },
  {
    title: 'COUNTRIES TO SEND MONEY',
    links: [
      { label: 'United Kingdom', link: '#' },
      { label: 'Zimbabwe', link: '#' },
      { label: 'South Africa', link: '#' },
      { label: 'Namibia', link: '#' },
      { label: 'Mozambique', link: '#' }
    ],
  },

  {
    title: 'CONTACT US',
    links: [
      { label: '2nd Floor Law Society House', link: '#' },
      { label: 'Kwame Nkrumah Avenue', link: '#' },
      { label: 'Harare', link: '#' },
      { label: '', link: '#' },
      { label: 'Cell: +263712887872', link: 'https://wa.me/+26371288787' },
      { label: 'Email: info@moozacash.com', link: '#' },
      { label: 'Website : www.moozacash.com', link: '#' },
    ],
  },
];



const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
        
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container  size="100rem"  className={classes.inner}>
        <div className={classes.groups}>{groups}</div>
           <div className={classes.logo}>
        <img src="./blue.png" alt="logo" width={200} />
          <Text size="xs" c="dimmed" className={classes.description}>
          MoozaCash Africa is a registered Money transfer and Bureau-de-change registered primarily in Zimbabwe,
          <br/>
           The United Kingdom and South Africa.
          </Text>
        </div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm" style={{marginTop: 30}}>
          © 2024 mopani.dev. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(60), height: rem(60) }} stroke={3.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle" >
            <IconBrandYoutube style={{ width: rem(60), height: rem(60) }} stroke={3.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(60), height: rem(60) }} stroke={3.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer