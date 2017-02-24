//
//  LocalStorage.m
//  MusicApp
//
//  Created by Luca SCHIDU on 2/24/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "LocalStorage.h"

@implementation LocalStorage

- (NSDictionary *)constantsToExport {
  return @{@"greeting": @"Welcome to the DevDactic\n React Native Tutorial!"};
}


RCT_EXPORT_METHOD(squareMe:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number*number)]]);
}

RCT_EXPORT_METHOD(minus:(int)number:(RCTResponseSenderBlock)callback) {
  callback(@[[NSNull null], [NSNumber numberWithInt:(number % 2)]]);
}


@end
