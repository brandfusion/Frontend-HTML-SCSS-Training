module.exports = (NODE_ENV) => ({
    plugins: [    
      // ["@hail2u/css-mqpacker"],  
      ["stylelint"],
      ["postcss-preset-env"], 
      ["postcss-reporter",
        { clearReportedMessages: true }
      ],
      ...NODE_ENV.mode === "production" ? ["cssnano"] : [],
    ],
  });