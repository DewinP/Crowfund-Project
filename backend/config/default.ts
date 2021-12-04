import dotenv from 'dotenv';

dotenv.config();

export default {
    port: 1337,
    dbUri: process.env.DB_URI,
    saltWorkFactor: 10,
    accessTokenTTL: "2h",
    refreshTokenTTL: "1y",
    origin:"http://localhost:3000",
    cookieDomain: 'localhost',
    stripeKey: process.env.STRIPE_SECRET_KEY,
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj3d09LoHc/OugCC0jLHd
    KBcIJyuQn7HeFCQ5bGHVeALY/WHf9vb3QIEgTEBvZbG+uScgF/WfUcebtDZGyGc9
    ybmrQv8NL/a2TdqzrgVYCUzkLvyQcWlcr+kJKlyMOH3AHsek+kON/2+y52ZjC9q4
    uvaTwApqdd4t0Afwx/5aDsYne5yaL4Vw2wwbHNaR+MX6HO0a9LYfLylRUeFxcZJE
    OAi2Z1g0sr9AR4ZwVB0eQ/T9pgYab7PzwncU/FRQzs2hjOHgvnWt9Q1DbeuKWIry
    C2cx90Tag7fPCDBB++3Yd+o3SGrgWXtDXj2/9+kYld49oJQlG8Km77C1wP7zq3Ue
    CQIDAQAB
    -----END PUBLIC KEY-----`.replace(/\n\s+/g, "\n"),
    privateKey: `-----BEGIN PRIVATE KEY-----
    MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCPd3T0ugdz866A
    ILSMsd0oFwgnK5Cfsd4UJDlsYdV4Atj9Yd/29vdAgSBMQG9lsb65JyAX9Z9Rx5u0
    NkbIZz3JuatC/w0v9rZN2rOuBVgJTOQu/JBxaVyv6QkqXIw4fcAex6T6Q43/b7Ln
    ZmML2ri69pPACmp13i3QB/DH/loOxid7nJovhXDbDBsc1pH4xfoc7Rr0th8vKVFR
    4XFxkkQ4CLZnWDSyv0BHhnBUHR5D9P2mBhpvs/PCdxT8VFDOzaGM4eC+da31DUNt
    64pYivILZzH3RNqDt88IMEH77dh36jdIauBZe0NePb/36RiV3j2glCUbwqbvsLXA
    /vOrdR4JAgMBAAECggEAAmtSI3DSIJpMuGAkz0UODMejpW5ygkDgdPA98CYPsJYC
    tPYeLdbRCUtMIUEKZ9l5FPv0CndjvAAsz9uE8srr46+P8+GjZipHvXUZR89TAlgj
    tmefo2vyikxYkVhtbGPxdgtpjKdQOQ0YBBcpxyjFafCvweKjFDD+joYdwS+YsuxN
    xhOkKSa/obWGzzZBJc0xrwBcii6+ZB6bd1ch+y8b7FqTTE+fnzWtYkWVDSiXnwGq
    YupI8QA18WvOa/72tI273GKOIJSe9ZMVsHetD/cr9sp/MhRCtTwk1pceNuzF4k5C
    KJVUC7gK6aMbksP3eGdUVNT2p0siZGiaWqFrsIZQ0QKBgQDCohhIP51h41JM4HXh
    p4nprW7yupTVymUSI+blToZ9rk9Dzmx6tC+8D7HtanLaOONFQAvkrr0ibQoaZQ+U
    XcxScaZCIH+yZdJzp/VxXqOzhe9WAxVUzX0qlUSz9uPecNLkscjyVmEsE+D1cdKY
    seoXghhzhVNBd4YO0EP05QG8GQKBgQC8s24zWYevbDVFC4Oc/Z4OBA47jzlVAfgW
    Tky1PSwfnYBtUyBErKH3/vfoWQaKrEmovk+4p9L0SDFlFDYRE2eLIjOnY2IfxGH8
    YeRA9ek6xAWwVBkaDfExaQ5ns3GgIUrQjgG3GcEFUzfhoY7QplpPJC1Xlzy1lKkS
    Mnva2nyvcQKBgHleIOw0lwxqd3Cu63NKSQqpdqzvwk3KhtoX/yxwmhcXMiBjQWwG
    nlmUI+ybW4FOxhHxzTjN6ezkt88bw+pNz1J9wiIsJ9Tz/5bVXo1SaZxR4ZvuEkgu
    V2XNbOkYBKI6Epg/cMIFMVUOFFKZpqxHDWWZX2vx8Ke7Q6JLJoU4pKtJAoGAcqpV
    /L4axW5rsFke0PcMZFfyjh6qKA3aQzOxSTCy70M2Fzi8Ev8ULS6yVm5Cm2G2IOQE
    baENf4OfAF0Xvaic8t8FpGGv7r3XDRYvLYpA/4S+MDfqSPrP5caBCmLwWO3iGHky
    caEkuaen/WO+9OshVZYWN3OfYHfFhVlICeVafwECgYBgEPPl9ImDKWwRRn+itxld
    2GVmjbg4X/szTB0kpAaGyInyGoG9jgbZ0gu+B0q0bBqt53BXOykgSEmdiOXVw/0d
    /Mkq52Pma1ubFa2bwoCO2NNH92zX/ONlVNBSJ+pGVe6L4uvH/Lm9lvXqIG2ZyNjb
    nFr664srKJdloaHi2Z/IhQ==
    -----END PRIVATE KEY-----`.replace(/\n\s+/g, "\n")}