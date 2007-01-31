/* CardElement.h - this file is part of SOPE
 *
 * Copyright (C) 2006 Inverse groupe conseil
 *
 * Author: Wolfgang Sourdeau <wsourdeau@inverse.ca>
 *
 * This file is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2, or (at your option)
 * any later version.
 *
 * This file is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; see the file COPYING.  If not, write to
 * the Free Software Foundation, Inc., 59 Temple Place - Suite 330,
 * Boston, MA 02111-1307, USA.
 */

#ifndef CARDELEMENT_H
#define CARDELEMENT_H

#import <Foundation/NSObject.h>

@class NSArray;
@class NSDictionary;
@class NSMutableArray;
@class NSMutableDictionary;
@class NSString;

@class CardGroup;

@interface CardElement : NSObject <NSCopying>
{
  NSString *tag;
  NSMutableArray *values;
  NSMutableDictionary *attributes;
  NSString *group;
  CardGroup *parent;
}

+ (id) elementWithTag: (NSString *) aTag;

+ (id) simpleElementWithTag: (NSString *) aTag
                      value: (NSString *) aValue;

+ (id) simpleElementWithTag: (NSString *) aTag
                 singleType: (NSString *) aType
                      value: (NSString *) aValue;

+ (id) elementWithTag: (NSString *) aTag
           attributes: (NSDictionary *) someAttributes
               values: (NSArray *) someValues;

- (void) setParent: (CardGroup *) aParent;
- (CardGroup *) parent;

- (void) setTag: (NSString *) aTag;

- (void) setGroup: (NSString *) aGroup;
- (NSString *) group;

- (void) addValue: (NSString *) aValue;
- (void) addValues: (NSArray *) someValues;

- (void) setValue: (unsigned int) anInt
               to: (NSString *) aValue;
- (NSString *) value: (unsigned int) anInt;

- (void) setNamedValue: (NSString *) aValueName
                    to: (NSString *) aValue;
- (NSString *) namedValue: (NSString *) aValueName;

- (void) setValue: (unsigned int) anInt
      ofAttribute: (NSString *) anAttribute
               to: (NSString *) aValue;
- (NSString *) value: (unsigned int) anInt
         ofAttribute: (NSString *) anAttribute;

- (void) addAttribute: (NSString *) anAttribute
                value: (NSString *) aValue;
- (void) addAttributes: (NSDictionary *) someAttributes;
- (void) removeValue: (NSString *) aValue
       fromAttribute: (NSString *) anAttribute;

- (void) addType: (NSString *) aType;

- (NSString *) tag;
- (NSArray *) values;
- (NSDictionary *) attributes;
- (BOOL) hasAttribute: (NSString *) aType
          havingValue: (NSString *) aValue;

- (BOOL) isVoid;

- (NSString *) versitString;

- (CardGroup *) searchParentOfClass: (Class) parentClass;

- (CardElement *) elementWithClass: (Class) elementClass;
- (void) setValuesAsCopy: (NSMutableArray *) someValues;
- (void) setAttributesAsCopy: (NSMutableDictionary *) someAttributes;

@end

#endif /* CARDELEMENT_H */
