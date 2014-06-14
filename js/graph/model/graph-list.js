define(function () {
    var graphs = {
        "graphList": {
            "g1": {
                "id": "g1",
                "title": "Relation between tags in stackoverflow",
                "description": "This grapgh shows the relation between first 60 tags and each tags first 60 related tags.",
                "thumbnail": "templates/images/g1.png",
                "htmlTitle": "stackoverflow-tag-relations",
                "tags": ["stackoverflow", "programming"]
            },
            "g2": {
                "id": "g2",
                "title": "Which is the trending tag last year?",
                "description": "You can sort the the data in yearly wise by clicking on the bottom year tab. The tags will be rearranged in descending order",
                "thumbnail": "templates/images/g2.png",
                "htmlTitle": "stackoverflow-tag-trending-yearly",
                "tags": ["stackoverflow", "programming"]
            },
            "g3": {
                "id": "g3",
                "title": "How tags are growing ?",
                "description": "This graph shows the growth of tags in each month.The vertical position of circle represent the count of questions in a month.",
                "thumbnail": "templates/images/g3.png",
                "htmlTitle": "stackoverflow-tag-growth-rate-montly",
                "tags": ["stackoverflow", "programming"]
            },
            "g4": {
                "id": "g4",
                "title": "Did you code on last Christmas day ?",
                "description": "It’s the punch-card visualization of question asked in each day of November-December in 2013",
                "thumbnail": "templates/images/g4.png",
                "htmlTitle": "stackoverflow-questions-punchcard",
                "tags": ["stackoverflow", "programming"]
            },
            "g5": {
                "id": "g5",
                "title": "Pulp Fiction",
                "description": "It’s the punch-card visualization of question asked in each day of November-December in 2013",
                "thumbnail": "templates/images/g4.png",
                "htmlTitle": "pulp-fiction",
                "tags": ["random", "filims"]
            }
        },
        "tags": ["all", "stackoverflow", "random", "filims"]
    };
    return graphs;
});