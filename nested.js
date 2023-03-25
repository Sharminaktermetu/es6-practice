let data = {
    Sophia: {
    id: 33,
    study: [
    {
       primary:
      [
        { school_name: "ABC primary school" },
        { location: "Peters burg" }
        ]
    },

    {
        secondary:
            [
                { school_name: "ABC secondary school"},
    
                { location: "St Lorence" }
            ]
    },
    ]
    }
    }

    // Sophia’s secondary school location?
    console.log(data.Sophia.study[1].secondary[0].school_name);