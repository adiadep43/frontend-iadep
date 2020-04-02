import React, { Component } from 'react';
import './style.css';
import ContBar from './../ContBar';
import Logo from './../Logo';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import Navigate from './../Navigate';


  var acoes = [
    "https://uploadiadep.s3.us-east-2.amazonaws.com/69fd71e572687bb25b6ced9e308cc304-acao_social%20%286%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0a15764bfedd570f261fb0880a866198-acao_social%20%285%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7371f890dbe9e01c6fabe57146453dc0-acao_social%20%283%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/2c0a367b2a02cc1810f3e229edde0c01-acao_social%20%287%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/aaa0de7f85b9f2b4c01f5f3074ac4b31-acao_social%20%284%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d62c0e180c56420547a54c969b9f2c16-acao_social%20%2811%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/3fe5124845be4b9bf4baeb231a4ad040-acao_social%20%281%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/41cf9f8f2f951d9cee0b18fe9793fa0e-acao_social%20%288%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0c401047e65d39fb16ccddbc75fb5aa0-acao_social%20%282%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/9ffd41f81fae078590b0b8c28370db81-acao_social%20%289%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/a99fdedbcdea93c1780a090d65a69f86-acao_social%20%2816%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/4b86ee68951d62da1a07e5865449e78d-acao_social%20%2812%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/420be496579269e2b6036468f6fe4836-acao_social%20%2813%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e084e9afc3775bc8f6742a2f041b6c78-acao_social%20%2810%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/4ec3e7d425b0a74eb35a07e6410e60b9-acao_social%20%2820%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/573b50387a007277a3bde4379823c060-acao_social%20%2821%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/6dedf03484165f78fca2658b877427b0-acao_social%20%2815%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/04acd97cda4cd7b817005dd8417db1c5-acao_social%20%2822%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7c681c1e856893fca9e5c19a95121ef6-acao_social%20%2823%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/150b3e687c42e008d8fd4e85155f88e7-acao_social%20%2824%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7a39a32d957681b0e0ddedaef276f6c7-acao_social%20%2826%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/74698ca9c4248d7798eddd41fc0d8e62-acao_social%20%2814%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5be924a14a69f6c4e480c4fd2efd3394-acao_social%20%2825%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/fce866dda282bf02a2fc25300f80a9fd-acao_social%20%2827%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c4e20744363045bc5bb6fdeb8d651274-acao_social%20%2829%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/bea018085ca4acd23229681a1b2424b9-acao_social%20%2831%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/dbcb73a5e3d6576f8150baa58b244508-acao_social%20%2828%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/9956130a1d53fe53e51c28e3f169a9b7-acao_social%20%2830%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/3dee5ab913eaf9de05f1d5e5314f4cb0-acao_social%20%2818%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/963994f3517928217dfb7e3f859bf4f1-acao_social%20%2817%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0433c2416418f353c576e6437dc36ba7-acao_social%20%2832%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/812aee3b2b79185bcd5c16b5cf6900cc-acao_social%20%2835%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/84587e021b772c35289b68f6d160387e-acao_social%20%2833%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/fb22db8e71564c169edc0576f9ab5449-acao_social%20%2837%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/35681086cd5d0645ec943c427e3d7fa6-acao_social%20%2836%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ed4c6c63d2fa97a98b74e36759ae53f6-acao_social%20%2834%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/8c8e727a00609863aa56e1739e82224f-acao_social%20%2838%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ef25ab8ea26b6afd6f7c579fc8a97fae-acao_social%20%2840%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/59e5f2c889a814339f38eebb14d1d121-acao_social%20%2839%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/aaab2abd2ca2bb37ba5ee62f4f007f17-acao_social%20%2841%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/33bad3e9ea8ca5607a65700853c82926-acao_social%20%2842%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7396defed8bbe7525cff89f83f178054-acao_social%20%2819%29.jpg"
  ];

  var missoes = [
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d2cac62e6a3e7b061f99dbf2437a9778-missoes%20%286%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d391c09ceb8073cc3f3e77b75bbc5527-missoes%20%281%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/285762b1d9a5f744b4d86e9be105a541-missoes%20%285%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ed746b45b90e2aa57cacf79d04c85889-missoes%20%284%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/3729c8d19561338877d577db37eda8ab-missoes%20%282%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/fede4e5aa01db5c76bd593555e83c05a-missoes%20%287%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d7bc5089a5f8fe8fd0dbb66fb8556acd-missoes%20%2811%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/3a77f29dae1fdb14b8cfbce0c94f3c4f-missoes%20%288%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/bf36ebc0bc8ed65552c2c8aec1cb3abb-missoes%20%2810%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ab43426430415d34853c78149f1d1c37-missoes%20%289%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/9c2f8ac9fb6aae38f4780f56db5d31e1-missoes%20%2812%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/eb315f003b96cc394924c26e2e702d96-missoes%20%283%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/56d41ca875a970bb5bbc60b8a9e85f39-missoes%20%2814%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/46b028b68d9241f9fe2bb4ec02bd363d-missoes%20%2815%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/69ea3334cc25a558428a9560222aabd9-missoes%20%2813%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/70a82605f2f2fbb181db3f610bc6d360-missoes%20%2818%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d8ed2ada2e2a263c1706181673545186-missoes%20%2817%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7b2e0bb7b0ffda8911f81e1f12a10e04-missoes%20%2820%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d0a49703000c7095b20b874c080a92e0-missoes%20%2819%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/a58ffda0b6b4968f348f01b7aaec646b-missoes%20%2821%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/de62129fe7df146abe6845c506f38683-missoes%20%2824%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/13fa74117897d639527cd090d5935788-missoes%20%2826%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/b6d414e1850b6e19d5361332151cd938-missoes%20%2823%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/344f795cad76abea4ae89139c5892e7d-missoes%20%2825%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e0b8a5593a35e8fdff364c204651788c-missoes%20%2828%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d2cf78781b985d22098afe6c6461aed9-missoes%20%2822%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/1bf84687b301bc2c37680bd1cf27974c-missoes%20%2827%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/6aa23d486bd7e421b3f4250a8b843638-missoes%20%2830%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c22efab750c9ca34bebee6815ee4162e-missoes%20%2829%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/4829df483c60fab8998e325dd4312b78-missoes%20%2816%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/19bc87a75322d8b928db299837c58e88-missoes%20%2832%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/a1051145e5ac59013af95449614d3a3f-missoes%20%2831%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/561a64c73279d1354ec8a7369c31c625-missoes%20%2836%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/cd8d6cc6f7597861a8e6a2b9de850015-missoes%20%2834%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/2baccd3d903428d3fbec663269398945-missoes%20%2839%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/a1b0ef48014239fce30bad4de7685abc-missoes%20%2835%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/331c40d4fac9ca2696a335dc0d35a8e0-missoes%20%2838%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/84e73ff7bc2d341eb8b971639ee2627f-missoes%20%2833%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/1945fd91d38c8545f4d0cc574badb596-missoes%20%2841%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/b17dd57c35efdce3f86cfb95c47070b7-missoes%20%2840%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/33b0c79fcbf0f8e542225407042709fb-missoes%20%2837%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/4cfd0903ba0b84aee146775c0d8bb620-missoes%20%2843%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5aa655f9bddffd7ee77c06707adb63bf-missoes%20%2842%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/87bb2e759e0cbb42424b2231ee9a35e3-missoes%20%2848%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e89488b703320167e44525df22b9c7fa-missoes%20%2847%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0e0f2cc08eaed031be56f8e5e2338622-missoes%20%2844%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/465c586630cd471a243b2c5b9c86ea15-missoes%20%2845%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f7455acb865f3e125d96dc2e1b8c60f9-missoes%20%2849%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5f6d0a7e604462f5a8e4954b21e1dbfc-missoes%20%2851%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/2c94a03cb40b7e3a8d220f648b0acb85-missoes%20%2846%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5d04911cb09bd2e706f76125b8eec242-missoes%20%2853%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/6360dd3c0d3cf45c91103bc6d40e4c87-missoes%20%2852%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f6827137ee12f7e6ac2eb18f26a9fe04-missoes%20%2854%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c6861222144f4f18e8e77f5ba1f8ed33-missoes%20%2850%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/da29b667107b37c17201dd5ae51155d8-missoes%20%2855%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/b2c584111907dcd507957f53b0d9c2f8-missoes%20%2856%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/311a2d956f05684402548e176a231c81-missoes%20%2860%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e52fc3fb5350a6b16e12b04d49c1789f-missoes%20%2859%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c11b2943e1da2a977888b7143bb1ea31-missoes%20%2857%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c6a8356aac855bf9a6793fbdb3e34e26-missoes%20%2858%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c1ab73d316257f091de2189eeb4d4c79-missoes%20%2861%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/9a5879f0ee78ec61766384f2ac1c8c8e-missoes%20%2862%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f69a57f42cf1ca768297a5439dabea64-missoes%20%2863%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/558fec0402a735ad91fc627f9e27ae4c-missoes%20%2865%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f444719da8758cc9bef360afe08b8607-missoes%20%2864%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/d9b9ac8ec9c6d58ae869a2c0e588f212-missoes%20%2866%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0b8a482987cce2785e9983279b7d81bf-missoes%20%2869%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ad758bb2f041279a5ad7813c1e680e84-missoes%20%2868%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/4223e1ce02da01aba9cc8e382f22fe18-missoes%20%2873%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/9b4f3696a9be729124fb08845432a012-missoes%20%2875%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/540674f868703627b2caf834368fa8c6-missoes%20%2874%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/3e94d4894f8ed92300f18c39cc8fb787-missoes%20%2878%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/8db7cc99987652d84e8a94fee134be8d-missoes%20%2876%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/68e29682afe4bb76a5354055a61c6172-missoes%20%2877%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ca91f348cfe1d4ab83d57731d43e4f95-missoes%20%2867%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/a27c103680995c85abaa833303a827bd-missoes%20%2879%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/09657e04d414738aaa238036a6ccc24c-missoes%20%2880%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0a2d12cef94e9ef067a37801866004d0-missoes%20%2881%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e4dd3d085947a2e0436a133f9c16adf9-missoes%20%2882%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ef3676c4037e3331cfa92da0511549ee-missoes%20%2884%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/260cdd809cf24c183c96388f68c6a6bc-missoes%20%2883%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/1ec5e94eb597d5fe4bcd690cb5fd865b-missoes%20%2885%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f9bf59e6295a2009b0c4b56c2d327688-missoes%20%2871%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/bd5ffd71ccdad2ae5f97bd6ae7a455bf-missoes%20%2886%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7e53a92119c7cac24e40651ca261e8b4-missoes%20%2870%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/72c02cc88873c4edeb1affbfb26f50cc-missoes%20%2887%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0536b861e6efd7794e3a716a79a66d18-missoes%20%2889%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/97a8a3b29394a7a95df7c5afcd55d6ad-missoes%20%2890%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7e0d9a7540bb626d8d763647a809d126-missoes%20%2891%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5aae91f10d23801549411ef5f3a37179-missoes%20%2892%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/1d5f0c4ea06760d6afe6b6b8b5332121-missoes%20%2888%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/25b693f86740fcfb67a5b72a4eed3768-missoes%20%2893%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/4976c791fcdf3c4a81266574bae5108d-missoes%20%2895%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/124f75472d2bbe08612ce555adfe81e5-missoes%20%2894%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ca41bedba8b563a58d7468aca1d2c5cc-missoes%20%2896%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0aa1a2d556827e70bf80fe831488cb85-missoes%20%2899%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c2e236db3f44f6df04ecbac812a34f5e-missoes%20%2898%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5afb3b645b8ca97cd4a60fb58b600481-missoes%20%2897%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f3af8f661413400e8a9b970634720b68-missoes%20%28101%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f27b5d60b6b1472be8e53f35c95a516a-missoes%20%28100%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e3cb09fbb96c5eac5eac1681338bd10f-missoes%20%28102%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/ea316d640062137a5a8b9936c8ab5e7e-missoes%20%28104%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/63e984d4b1636693b6fbd66f18b625ca-missoes%20%28103%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/62b1855c3d4b86c91179d76320dc92e2-missoes%20%28106%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0e1a75510ef11fc804b453645ef644af-missoes%20%28105%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/c369c507382b95055cebc103f28e939d-missoes%20%28107%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/04e4e7c22b5901fcd716dee9c9b9c5dc-missoes%20%28108%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/6c59c9838a96e5285169da39e423daee-missoes%20%28109%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/2f283312912409a340a443e4273d05ba-missoes%20%28110%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/9fbd8e37d560af8ddc1912137a7245ec-missoes%20%28111%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/627e56ec7f8c30e79a1127502d550040-missoes%20%28113%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/8020725e176f4bd7bbde93b8084dc43c-missoes%20%28114%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/76806b38fc32c77c29556ea63096e6c4-missoes%20%28115%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7bf1786e0e4deb5d8ad06e4599aa91f1-missoes%20%28116%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5bee92b11213b06f4cc97ea39b2c2376-missoes%20%28112%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/2631df73762645d9f2c8835bf7ef4110-missoes%20%28117%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7f89121f40d21fb287fe607ab6341fa7-missoes%20%28120%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/efa558fc3189be11272bac1b6780dae2-missoes%20%28118%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/b78cbbf1f4a4073a16d0172677a9c696-missoes%20%28123%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/85e96ae3ea19d1e31c256b2312c78980-missoes%20%28119%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/10ad5122140158f56569191aaa710d99-missoes%20%28121%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/8a6a58873cc85db960a7a5af9d1f6368-missoes%20%28124%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/19d269c1e394937b13978c2962150a94-missoes%20%28122%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/a6fef851d7ba540ac8936a438c7d69c0-missoes%20%28127%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/0b212b87c65ce699617f3490e77020ca-missoes%20%28126%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/578cc23782eef7ca11737c464cbd66c3-missoes%20%28125%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/2f389746843830b657473024ac66b12c-missoes%20%28133%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/7fb6b8e511711fdeee1d8376487b59e8-missoes%20%28128%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/46a82f67af914d10d4a527f9730f41d5-missoes%20%28129%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5efb98929b94148096a06c2fb08f5c0f-missoes%20%28131%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/534c31af672b73a1a9e1d7fdf2a24f1b-missoes%20%28132%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/3c0bad2ed16747b4f27bf9e51555bb54-missoes%20%28136%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/f362e660d8f56fc4d417fa1041d8f3be-missoes%20%28134%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/e54b0df2b52be66c679667a42b39df3a-missoes%20%28137%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/6170f44bd7b347c191f1766bac7a3df9-missoes%20%28135%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/b95c9bc5260d99ac0ca5348c5036240c-missoes%20%28138%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/6b2b7329ee724c7669652ed82cbf49ca-missoes%20%28139%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/eb69212098553fb94b2157be6fbd70b6-missoes%20%28130%29.jpg",
    "https://uploadiadep.s3.us-east-2.amazonaws.com/5bd1d5c752911efb7001a91e89671672-missoes%20%2872%29.jpg"
  ];

  export default class AcaoPage extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex1: 0,
          photoIndex2: 0,
          isOpen1: false,
          isOpen2: false,
        };
      }
    render(){
    function toggle() {
        var sec = document.getElementById('sec');
        var nav = document.getElementById('navigation');
        
        sec.classList.toggle('active');
        nav.classList.toggle('active');
    }
    return(
        <>
        <section className="banner" id="sec">
        <header>
            <Logo/>
            <div id="toggle" onClick={toggle}></div>
        </header>
        <div className="content">
            <br/>
            <br/>
            <h2>Ação Social</h2>
            <br/>
            <br/>
            <div className="galery">
              
              <br/>
              <h2>Mão Amiga <span>IADEP</span></h2>
              <br/>
              <br/>
              <p>A Mão Amiga Iadep é um projeto social em que ajudamos os mais nessecitados e fazemos o ide do Senhor, e cumprimos a palavra em cuidar dos orfãos e das viúvas! (Tiago 1:27)</p>
              <br/>
              <br/>
              <img src={acoes[0]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 0 })} />
              <img src={acoes[1]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 1 })} />
              <img src={acoes[2]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 2 })} />
              <img src={acoes[3]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 3 })} />
              <img src={acoes[4]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 4 })} />
              <img src={acoes[5]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 5 })} />
              <img src={acoes[6]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 6 })} />
              <img src={acoes[7]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 7 })} />
              <img src={acoes[8]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 8 })} />
              <img src={acoes[9]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 9 })} />
              <img src={acoes[10]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 10 })} />
              <img src={acoes[11]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 11 })} />
              <img src={acoes[12]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 12 })} />
              <img src={acoes[13]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 13 })} />
              <img src={acoes[14]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 14 })} />
              <img src={acoes[15]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 15 })} />
              <img src={acoes[16]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 16 })} />
              <img src={acoes[17]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 17 })} />
              <img src={acoes[18]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 18 })} />
              <img src={acoes[19]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 19 })} />
              <img src={acoes[20]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 20 })} />
              <img src={acoes[21]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 21 })} />
              <img src={acoes[22]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 22 })} />
              <img src={acoes[23]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 23 })} />
              <img src={acoes[24]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 24 })} />
              <img src={acoes[25]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 25 })} />
              <img src={acoes[26]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 26 })} />
              <img src={acoes[27]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 27 })} />
              <img src={acoes[28]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 28 })} />
              <img src={acoes[29]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 29 })} />
              <img src={acoes[30]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 30 })} />
              <img src={acoes[31]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 31 })} />
              <img src={acoes[32]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 32 })} />
              <img src={acoes[33]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 33 })} />
              <img src={acoes[34]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 34 })} />
              <img src={acoes[35]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 35 })} />
              <img src={acoes[36]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 36 })} />
              <img src={acoes[37]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 37 })} />
              <img src={acoes[38]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 38 })} />
              <img src={acoes[39]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 39 })} />
              <img src={acoes[40]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 40 })} />
              <img src={acoes[41]} onClick={() => this.setState({ isOpen1: true, photoIndex1: 41 })} />

              <br/>
              <br/>
              <h2>Missões</h2>
              <br/>
              <br/>

              <img src={missoes[0]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 0 })} />
              <img src={missoes[1]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 1 })} />
              <img src={missoes[2]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 2 })} />
              <img src={missoes[3]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 3 })} />
              <img src={missoes[4]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 4 })} />
              <img src={missoes[5]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 5 })} />
              <img src={missoes[6]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 6 })} />
              <img src={missoes[7]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 7 })} />
              <img src={missoes[8]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 8 })} />
              <img src={missoes[9]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 9 })} />
              <img src={missoes[10]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 10 })} />
              <img src={missoes[11]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 11 })} />
              <img src={missoes[12]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 12 })} />
              <img src={missoes[13]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 13 })} />
              <img src={missoes[14]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 14 })} />
              <img src={missoes[15]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 15 })} />
              <img src={missoes[16]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 16 })} />
              <img src={missoes[17]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 17 })} />
              <img src={missoes[18]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 18 })} />
              <img src={missoes[19]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 19 })} />
              <img src={missoes[20]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 20 })} />
              <img src={missoes[21]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 21 })} />
              <img src={missoes[22]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 22 })} />
              <img src={missoes[23]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 23 })} />
              <img src={missoes[24]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 24 })} />
              <img src={missoes[25]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 25 })} />
              <img src={missoes[26]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 26 })} />
              <img src={missoes[27]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 27 })} />
              <img src={missoes[28]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 28 })} />
              <img src={missoes[29]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 29 })} />
              <img src={missoes[30]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 30 })} />
              <img src={missoes[31]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 31 })} />
              <img src={missoes[32]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 32 })} />
              <img src={missoes[33]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 33 })} />
              <img src={missoes[34]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 34 })} />
              <img src={missoes[35]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 35 })} />
              <img src={missoes[36]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 36 })} />
              <img src={missoes[37]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 37 })} />
              <img src={missoes[38]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 38 })} />
              <img src={missoes[39]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 39 })} />
              <img src={missoes[40]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 40 })} />
              <img src={missoes[41]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 41 })} />
              <img src={missoes[42]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 42 })} />
              <img src={missoes[43]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 43 })} />
              <img src={missoes[44]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 44 })} />
              <img src={missoes[45]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 45 })} />
              <img src={missoes[46]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 46 })} />
              <img src={missoes[47]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 47 })} />
              <img src={missoes[48]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 48 })} />
              <img src={missoes[49]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 49 })} />
              <img src={missoes[50]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 50 })} />
              <img src={missoes[51]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 51 })} />
              <img src={missoes[52]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 52 })} />
              <img src={missoes[53]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 53 })} />
              <img src={missoes[54]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 54 })} />
              <img src={missoes[40]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 40 })} />
              <img src={missoes[41]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 41 })} />
              <img src={missoes[42]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 42 })} />
              <img src={missoes[43]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 43 })} />
              <img src={missoes[44]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 44 })} />
              <img src={missoes[45]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 45 })} />
              <img src={missoes[46]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 46 })} />
              <img src={missoes[47]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 47 })} />
              <img src={missoes[48]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 48 })} />
              <img src={missoes[49]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 49 })} />
              <img src={missoes[50]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 50 })} />
              <img src={missoes[51]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 51 })} />
              <img src={missoes[52]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 52 })} />
              <img src={missoes[53]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 53 })} />
              <img src={missoes[54]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 54 })} />
              <img src={missoes[55]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 55 })} />
              <img src={missoes[56]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 56 })} />
              <img src={missoes[57]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 57 })} />
              <img src={missoes[58]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 58 })} />
              <img src={missoes[59]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 59 })} />
              <img src={missoes[60]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 60 })} />
              <img src={missoes[61]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 61 })} />
              <img src={missoes[62]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 62 })} />
              <img src={missoes[63]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 63 })} />
              <img src={missoes[64]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 64 })} />
              <img src={missoes[65]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 65 })} />
              <img src={missoes[66]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 66 })} />
              <img src={missoes[67]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 67 })} />
              <img src={missoes[68]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 68 })} />
              <img src={missoes[69]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 69 })} />
              <img src={missoes[70]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 70 })} />
              <img src={missoes[71]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 71 })} />
              <img src={missoes[72]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 72 })} />
              <img src={missoes[73]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 73 })} />
              <img src={missoes[74]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 74 })} />
              <img src={missoes[75]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 75 })} />
              <img src={missoes[76]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 76 })} />
              <img src={missoes[77]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 77 })} />
              <img src={missoes[78]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 78 })} />
              <img src={missoes[79]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 79 })} />
              <img src={missoes[80]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 80 })} />
              <img src={missoes[81]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 81 })} />
              <img src={missoes[82]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 82 })} />
              <img src={missoes[83]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 83 })} />
              <img src={missoes[84]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 84 })} />
              <img src={missoes[85]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 85 })} />
              <img src={missoes[86]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 86 })} />
              <img src={missoes[87]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 87 })} />
              <img src={missoes[88]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 88 })} />
              <img src={missoes[89]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 89 })} />
              <img src={missoes[90]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 90 })} />
              <img src={missoes[91]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 91 })} />
              <img src={missoes[92]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 92 })} />
              <img src={missoes[93]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 93 })} />
              <img src={missoes[94]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 94 })} />
              <img src={missoes[95]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 95 })} />
              <img src={missoes[96]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 96 })} />
              <img src={missoes[97]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 97 })} />
              <img src={missoes[98]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 98 })} />
              <img src={missoes[99]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 99 })} />
              <img src={missoes[100]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 100 })} />
              <img src={missoes[101]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 101 })} />
              <img src={missoes[102]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 102 })} />
              <img src={missoes[103]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 103 })} />
              <img src={missoes[104]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 104 })} />
              <img src={missoes[105]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 105 })} />
              <img src={missoes[106]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 106 })} />
              <img src={missoes[107]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 107 })} />
              <img src={missoes[108]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 108 })} />
              <img src={missoes[109]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 109 })} />
              <img src={missoes[110]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 110 })} />
              <img src={missoes[111]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 111 })} />
              <img src={missoes[112]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 112 })} />
              <img src={missoes[113]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 113 })} />
              <img src={missoes[114]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 114 })} />
              <img src={missoes[115]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 115 })} />
              <img src={missoes[116]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 116 })} />
              <img src={missoes[117]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 117 })} />
              <img src={missoes[118]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 118 })} />
              <img src={missoes[119]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 119 })} />
              <img src={missoes[120]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 120 })} />
              <img src={missoes[121]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 121 })} />
              <img src={missoes[122]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 122 })} />
              <img src={missoes[123]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 123 })} />
              <img src={missoes[124]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 124 })} />
              <img src={missoes[125]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 125 })} />
              <img src={missoes[126]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 126 })} />
              <img src={missoes[127]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 127 })} />
              <img src={missoes[128]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 128 })} />
              <img src={missoes[129]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 129 })} />
              <img src={missoes[130]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 130 })} />
              <img src={missoes[131]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 131 })} />
              <img src={missoes[132]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 132 })} />
              <img src={missoes[133]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 133 })} />
              <img src={missoes[134]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 134 })} />
              <img src={missoes[135]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 135 })} />
              <img src={missoes[136]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 136 })} />
              <img src={missoes[137]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 137 })} />
              <img src={missoes[138]} onClick={() => this.setState({ isOpen2: true, photoIndex2: 138 })} />



                {this.state.isOpen1 && (
                      <Lightbox
                        mainSrc={acoes[this.state.photoIndex1]}
                        nextSrc={acoes[(this.state.photoIndex1 + 1) % acoes.length]}
                        prevSrc={acoes[(this.state.photoIndex1 + acoes.length - 1) % acoes.length]}
                        onCloseRequest={() => this.setState({ isOpen1: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex1: (this.state.photoIndex1 + acoes.length - 1) % acoes.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex1: (this.state.photoIndex1 + 1) % acoes.length,
                          })
                        }
                      />
                    )}
            {this.state.isOpen2 && (
                      <Lightbox
                        mainSrc={missoes[this.state.photoIndex2]}
                        nextSrc={missoes[(this.state.photoIndex2 + 1) % missoes.length]}
                        prevSrc={missoes[(this.state.photoIndex2 + missoes.length - 1) % missoes.length]}
                        onCloseRequest={() => this.setState({ isOpen2: false })}
                        onMovePrevRequest={() =>
                          this.setState({
                            photoIndex2: (this.state.photoIndex2 + missoes.length - 1) % missoes.length,
                          })
                        }
                        onMoveNextRequest={() =>
                          this.setState({
                            photoIndex2: (this.state.photoIndex2 + 1) % missoes.length,
                          })
                        }
                      />
                    )}
            </div>
            <ContBar/>
        </div>
    </section>
    <Navigate />
    </>
    );
}
}