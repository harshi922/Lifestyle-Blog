app
    .value("d", new Date())
    .value("categories", ["style", "design", "food", "relationships", "travel"])
app
    .controller("foodController", ["$scope", "d", "categories", "$anchorScroll", "$location", function ($scope, d, categories, $anchorScroll, $location) {
        $scope.blogs = [
            { id: 01, date: d, image: "https://picsum.photos/300/200", numComments: 15, category: categories[3], title: "lorem Soft ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 02, date: d, image: "https://picsum.photos/300/200", numComments: 25, category: categories[2], title: "Toys lorem ipsum dolor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 03, date: d, image: "https://picsum.photos/300/200", numComments: 1, category: categories[1], title: "lorem Soft ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 04, date: d, image: "https://picsum.photos/300/200", numComments: 24, category: categories[4], title: "Toys lorem ipsum dolor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 05, date: d, image: "https://picsum.photos/300/200", numComments: 15, category: categories[3], title: "lorem Soft ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 06, date: d, image: "https://picsum.photos/300/200", numComments: 25, category: categories[2], title: "Toys lorem ipsum dolor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 07, date: d, image: "https://picsum.photos/300/200", numComments: 1, category: categories[1], title: "lorem Soft ipsum dolor sit amet", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." },
            { id: 08, date: d, image: "https://picsum.photos/300/200", numComments: 24, category: categories[4], title: "Toys lorem ipsum dolor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu nunc arcu. Suspendisse bibendum bibendum sapien sit amet egestas. Sed facilisis, enim ac pharetra rhoncus, nunc nulla finibus magna, in sollicitudin orci ex eu elit. Aenean lorem orci, pretium id mi vel, laoreet vehicula nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat eu ante sed scelerisque. Nullam quis nisl quis turpis porttitor rhoncus. Pellentesque est odio, auctor ut eros vel, pellentesque cursus massa. Quisque nec odio eu erat viverra condimentum.Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec pellentesque vehicula mollis. Donec dictum venenatis magna vitae venenatis. Quisque congue quam eu diam dignissim, eu eleifend libero condimentum. Aenean nec justo ultrices lacus malesuada consequat. Nullam elit leo, placerat eu convallis eu, tincidunt sit amet dolor. Pellentesque in ipsum nulla. Vestibulum est ante, consequat vitae quam dignissim, maximus fermentum erat. Sed et dolor lobortis ligula commodo fringilla vitae at ipsum. Nunc iaculis vulputate lorem eu efficitur. Donec ut eros sed arcu lobortis tincidunt vel eget enim. Curabitur euismod ante interdum, sodales mi a, auctor augue. Sed posuere ac dolor vel volutpat. Vivamus ullamcorper blandit erat, sit amet iaculis metus viverra at. Nam interdum molestie fermentum. Aliquam posuere ligula ac ipsum tempor pellentesque. Ut volutpat urna quis mauris maximus facilisis. In faucibus eros non arcu finibus porttitor. Aliquam molestie orci vel lectus lacinia, quis elementum elit imperdiet. Nam auctor augue orci, at porttitor leo interdum in. Quisque mattis, massa a egestas ornare, arcu neque semper quam, in imperdiet lorem ipsum eget nibh. Cras imperdiet, sem et posuere consectetur, nisl elit tincidunt diam, pharetra vulputate lectus purus vel lacus. Nunc metus nunc, posuere sit amet mollis volutpat, ultricies eget sapien. Aliquam non libero felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis scelerisque non nunc sit amet accumsan. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." }
        ];

        $scope.desBlogsFind = function () {
            var desBlogs = [];
            for (var i = 0; i < $scope.blogs.length; i++) {
                if ($scope.blogs[i].category == "food") {
                    desBlogs.push($scope.blogs[i]);
                    console.log(desBlogs[i]);
                }
            }

            console.log(desBlogs);
            return desBlogs;
        };
        $scope.mostpopular = function () {
            var numOfComments = [];
            for (var i = 0; i < $scope.desBlogs.length; i++) {
                numOfComments[i] = $scope.desBlogs[i].numComments;
            }
            numOfComments.sort();
            console.log(numOfComments.slice(0, 3));
            return numOfComments.slice(0, 3);
        };

        $scope.scrollTo = function (loc) {
            $location.hash(loc);
            $anchorScroll();
        }

        $scope.search = function (item) {
            if ($scope.searchText == undefined)
                return true;
            else if (item.title.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1)
                return true;
            return false;
        }

    }])
    .controller("commentsController", function ($scope) {
        $scope.comments = [];
        $scope.isComments = false;
        $scope.replies = [];
        $scope.addComment = function () {
            if ($scope.commentText != "") {
                var dateTime = new Date();
                $scope.comments.push({ comment: $scope.commentText, name: $scope.name, email: $scope.email, date: dateTime });
                $scope.isComments = true;
                $scope.commentText = "";
            }
        }
        $scope.addReply = function () {
            if ($scope.replyText != '') {
                var rdateTime = new Date();
                console.log({ comment: $scope.replyText, name: $scope.rname, email: $scope.remail, date: rdateTime });
                $scope.replies.push({ comment: $scope.replyText, name: $scope.rname, email: $scope.remail, date: rdateTime });
                $scope.replyText = "";
            }

        }
        $scope.remItem = function ($index) {
            $scope.comments.splice($index, 1);
        }
        $scope.remItem = function ($index) {
            $scope.replies.splice($index, 1);
        }
    });

app.service("capitalize", function () {
    this.capitalizeFirst = function (inputString) {
        var output = "";
        if (!inputString) {
            return inputString;
        }
        else {
            for (var i = 0; i < inputString.length; i++) {
                if (i == 0) {
                    output = output + inputString[i].toUpperCase();
                }
                else if (i > 0 && inputString[i - 1] == " ") {
                    output = output + inputString[i].toUpperCase();
                }
                else
                    output = output + inputString[i];
            }
        }
        return output;
    };
});

app
    .filter("FirstLetterCaps", ["capitalize", function (capitalize) {
        return function (x) {
            return capitalize.capitalizeFirst(x);
        };
    }])
    .filter('orderObjectBy', function () {
        return function (input, attribute) {
            if (!angular.isObject(input)) return input;

            var array = [];
            for (var objectKey in input) {
                array.push(input[objectKey]);
            }

            array.sort(function (a, b) {
                a = parseInt(a[attribute]);
                b = parseInt(b[attribute]);
                //    return a - b; is for asc
                return b - a;
            });
            return array;
        }
    });